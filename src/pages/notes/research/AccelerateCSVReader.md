# 加速大数据集的读取

深度学习任务的数据预处理时，往往需要读取最原始的大数据集，非常耗费时间，比如一个`2GB`的`.csv`文件，使用`pandas`读取可能需要长达`30s`，这对于调试代码来说是非常不友好的。本文以一个`1.78G`的`.csv`文件为例，介绍如何加速读取大数据集。

## 利用函数参数优化

我们使用`pandas.read_csv`函数读取数据集，因此首先通读一遍<a href="https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.read_csv.html" target="_blank" m-x-2 inline-flex items-center gap-2><div i-devicon:pandas dark:invert-75 />文档</a>，找到一些可以优化的参数。


在不使用任何参数的情况下，读取`1.78G`的`.csv`文件需要`24.6121s`，设置了必要的参数后，读取时间缩短到`16.3087s`。

``` python
from pandas import read_csv
from time import perf_counter
# ===== 24.6121s =====
start = perf_counter()
df = read_csv('data.csv')
end = perf_counter()
print(f'Cost {end - start:.4f}s')
# ===== 16.3087s =====
begin = perf_counter()
df = read_csv(path, header=None, names=names, index_col=None, 
              usecols=usecols, dtype=int, engine='c', 
              skiprows=1, na_filter=None, skip_blank_lines=True, 
              memory_map=True, low_memory=True, encoding='utf-8')
end = perf_counter()
print(f'Cost {end - begin:.4f}s')
```

## 并行读取

并行读取首先需要对原始数据集分块，使用python还是要读取原始的数据集再分块，这样并行读取的意义就不大了。我们可以使用linux的`split`命令在系统级别进行分块，速度很快。

split的`-n`参数可以设置块的个数，但是对于`.csv`文件，使用这种方式可能会导致分块后文件的最后一行不完整，因此使用`-l`参数，设置每个分块的行数，`-d`参数设置分块文件的后缀为数字，`-a`参数设置分块文件的后缀长度。

那么首先需要知道`.csv`文件的总行数，使用`wc -l`命令，再根据并行进程数量就能得到每个进程需要处理的行数`<nrows>`。

``` bash
# 查看总行数
wc -l data.csv
# 分块
split -l $nlines -a 2 -d data.csv _d_
```

接下来就能<a href="https://docs.python.org/3/library/concurrent.futures.html#processpoolexecutor" target="_blank" inline-flex items-center m-x-2 gap-2><div i-hugeicons:rocket />并行读取</a>啦 ~

> [!WARNING]
> 可以在自己的服务器上尝试不同的`nproc`，我测试的是到`64`个进程就收敛了。

``` python
from pandas import read_csv, concat
from time import perf_counter
from subprocess import run
from concurrent.futures import ProcessPoolExecutor

begin = perf_counter()
nproc = 64
# 0.3938s
nrows = run(['wc', '-l', path], capture_output=True)
nrows = int(nrows.stdout.split()[0])
nlines = nrows // (nproc - 1)
# 2.9527s
run(['split', '-l', str(nlines), '-a', '2', '-d', path, '_d_'])
# 4.8770s
with ProcessPoolExecutor(max_workers=nproc) as executor:
  futures = [executor.submit(read_csv, 
                f'_d_{i:02d}', header=None, names=names, 
                index_col=None, usecols=usecols, dtype=int, 
                engine='c', skiprows=int(not i), na_filter=None,
                skip_blank_lines=True, memory_map=True, 
                low_memory=True, encoding='utf-8') 
             for i in range(nproc)]
  datas = [future.result() for future in futures]
df = concat(datas)
end = perf_counter()
print(f'Cost {end - begin:.4f}s')
```

> [!CAUTION]
> 如果你需要清理分块文件，`rm _d_*`即可，注意不要误删其他文件。  
> 当需要大量的代码调试，我建议不清理分块文件，这样可以节省分块的时间。

这样，读取时间就从原来的`24.6121s`到`4.8770s`，读取速度提升了`5`倍。

