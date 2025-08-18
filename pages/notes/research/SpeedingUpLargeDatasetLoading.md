# Speeding Up Large Dataset Loading

When preprocessing data for deep learning tasks, you often need to load the raw, massive dataset, which can be really time-consuming. For example, loading a 2GB `.csv` file using `pandas` might take up to 30 seconds — not exactly ideal when you're debugging your code. This article uses a 1.78GB `.csv` file as an example to show you how to speed things up.

## Optimizing with Function Parameters

We use the `pandas.read_csv` function to load the dataset, so the first step is to carefully read through the <a href="https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.read_csv.html" target="_blank" inline-flex items-center gap-2><div i-devicon:pandas dark:invert-75 />docs</a> to identify some parameters that can be fine-tuned.

Without using any extra parameters, reading the 1.78GB `.csv` file takes `24.6121s`. After specifying the necessary parameters, the load time drops to `16.3087s`.

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

## Parallel Loading

Parallel loading requires partitioning the raw dataset into chunks. If you try to do that in Python by loading the full dataset first and then splitting it, the benefits of parallelism diminish. Instead, you can use Linux’s `split` command to partition the file at the OS level — it’s blazing fast.

While the `-n` flag in `split` lets you define the number of chunks, using it for a `.csv` file might leave the last line of a chunk incomplete. That’s why we use the `-l` flag to set the number of lines per chunk, along with `-d` for numeric suffixes and `-a` to specify the length of the suffix.

First, determine the total number of lines in the `.csv` file using `wc -l`. Then, based on the number of parallel processes, you calculate the number of rows (`<nrows>`) each process should handle.

``` bash
# Get total line count
wc -l data.csv
# Split file into chunks
split -l $nlines -a 2 -d data.csv _d_
```

Now you're all set to <a href="https://docs.python.org/3/library/concurrent.futures.html#processpoolexecutor" target="_blank" inline-flex items-center gap-2><div i-hugeicons:rocket />load in parallel</a> ~

> [!WARNING]
> Feel free to experiment with different `nproc` values on your server — I found that performance converges at 64 processes.

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
> To clean up the chunk files, simply run `rm _d_*`. Just be cautious not to delete any other files by mistake.
> When deep debugging, it's best to keep the chunk files to avoid re-splitting the dataset.

This way, the load time drops from `24.6121s` to `4.8770s` — about a 5x speed boost!
