# Binary Search
## 基本框架
假设 `x = 3`.  

::: tabbar
@ 最后一个小于 x
``` java
// [ < 3 | >= 3]
int l = -1, r = n;
while (l + 1 < r) {
  int mid = (l + r) >> 1;
  if (arr[mid] < 3) l = mid;
  else r = mid;
}
result = l;
```

@ 第一个大于等于 x
``` java
// [ < 3 | >= 3]
int l = -1, r = n;
while (l + 1 < r) {
  int mid = (l + r) >> 1;
  if (arr[mid] < 3) l = mid;
  else r = mid;
}
result = r;
```

@ 最后一个小于等于 x
``` java
// [ <= 3 | > 3]
int l = -1, r = n;
while (l + 1 < r) {
  int mid = (l + r) >> 1;
  if (arr[mid] <= 3) l = mid;
  else r = mid;
}
result = l;
```

@ 第一个大于 x
``` java
// [ <= 3 | > 3]
int l = -1, r = n;
while (l + 1 < r) {
  int mid = (l + r) >> 1;
  if (arr[mid] <= 3) l = mid;
  else r = mid;
}
result = r;
```
:::

# Problem 1: 数列分段

## 题目描述

对于给定的一个长度为N的正整数数列 $A_{1\sim N}$，现要将其分成 $M$（$M\leq N$）段，并要求每段连续，且每段和的最大值最小。

关于最大值最小：

例如一数列 $4\ 2\ 4\ 5\ 1$ 要分成 $3$ 段。

将其如下分段：

$$[4\ 2][4\ 5][1]$$

第一段和为 $6$，第 $2$ 段和为 $9$，第 $3$ 段和为 $1$，和最大值为 $9$。

将其如下分段：

$$[4][2\ 4][5\ 1]$$

第一段和为 $4$，第 $2$ 段和为 $6$，第 $3$ 段和为 $6$，和最大值为 $6$。

并且无论如何分段，最大值不会小于 $6$。

所以可以得到要将数列 $4\ 2\ 4\ 5\ 1$ 要分成 $3$ 段，每段和的最大值最小为 $6$。

## 输入格式

第 $1$ 行包含两个正整数 $N,M$。  

第 $2$ 行包含 $N$ 个空格隔开的非负整数 $A_i$，含义如题目所述。

## 输出格式

一个正整数，即每段和最大值最小为多少。

## 样例 #1

### 样例输入 #1

```
5 3
4 2 4 5 1
```

### 样例输出 #1

```
6
```

## 提示

对于 $20\%$ 的数据，$N\leq 10$。

对于 $40\%$ 的数据，$N\leq 1000$。

对于 $100\%$ 的数据，$1\leq N\leq 10^5$，$M\leq N$，$A_i < 10^8$， 答案不超过 $10^9$。

## 题解

```java
import java.util.Scanner;

public class Main {
	public static int[] arr;
	public static int n;
	public static int m;
	public static boolean check(int maxSum) {
		int sum = 0;
		int cnt = 1;
		for (int i = 0; i < n; ++i) {
			if (sum + arr[i] <= maxSum) {sum += arr[i];}
			else {sum = arr[i]; ++cnt;}
		}
		return cnt <= m;
	}
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		n = scan.nextInt();
		m = scan.nextInt();
		arr = new int[n];
		int maxElem = Integer.MIN_VALUE;
		int sum = 0;
		for (int i = 0; i < n; ++i) {
			arr[i] = scan.nextInt();
			maxElem = Math.max(maxElem, arr[i]);
			sum += arr[i];
		}
		int left = maxElem - 1;
		int right = sum + 1;
		while (left + 1 < right) {
			int mid = ((right - left) >> 1) + left;
			if (check(mid)) right = mid;
			else left = mid;
		}
		System.out.println(right);
		scan.close();
	}
}
```

# Problem 2: 奶牛晒衣服

## 题目背景

熊大妈决定给每个牛宝宝都穿上可爱的婴儿装 。但是由于衣服很湿，为牛宝宝晒衣服就成了很不爽的事情。于是，熊大妈请你（奶牛）帮助她完成这个重任。

## 题目描述

一件衣服在自然条件下用一秒的时间可以晒干 $a$ 点湿度。抠门的熊大妈只买了一台烘衣机 。使用用一秒烘衣机可以让一件衣服额外烘干 $b$ 点湿度（一秒晒干 $a+b$ 湿度），但在同一时间内只能烘一件衣服。现在有 $n$ 件衣服，第 $i$ 衣服的湿度为 $w_i$（保证互不相同），要你求出弄干所有衣服的最少时间（湿度为 $0$ 为干 ）。

## 输入格式

第一行三个整数，分别为 $n,a,b$。  
接下来 $2$ 到 $n+1$ 行，第 $i$ 行输入 $w_i$。

## 输出格式

一行，弄干所有衣服的最少时间。

## 样例 #1

### 样例输入 #1

```
3 2 1
1
2
3
```

### 样例输出 #1

```
1
```

## 提示

### 样例解释

让机器烘第三件衣服即可一秒完成。

### 数据范围

$1 \le w_i,a,b,n \le 5 \times 10^5$

## 题解

> [!TIP]
> 1. 不能使用$sum\{w_i\} - a * time * n / b$来计算使用烘干机的时间，因为部分衣服可能提前自然晒干了
> 2. 整数向上取整：$\lceil \frac{a}{b} \rceil = \lfloor \frac{a + b - 1}{b} \rfloor$

``` java
import java.util.Scanner;

public class Main {
	public static int[] arr;
	public static int a, b;
	public static boolean check(int time) {
		int cnt = 0;
		for (int i = 0; i < arr.length; ++i) {
			int tmp = arr[i] - a * time;
			if (tmp <= 0) continue;
			cnt += (tmp + b - 1) / b;
		}
		return cnt <= time;
	}
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int n = scan.nextInt();
		a = scan.nextInt();
		b = scan.nextInt();
		arr = new int[n];
		for (int i = 0; i < n; ++i) {
			arr[i] = scan.nextInt();
		}
		int left = 0;
		int right = 500000 + 10;
		while (left + 1 < right) {
			int mid = ((right - left) >> 1) + left;
			if (check(mid)) right = mid;
			else left = mid;
		}
		System.out.println(right);
		scan.close();
	}
}
```

# Problem 3: 借教室

## 题目描述

在大学期间，经常需要租借教室。大到院系举办活动，小到学习小组自习讨论，都需要向学校申请借教室。教室的大小功能不同，借教室人的身份不同，借教室的手续也不一样。

面对海量租借教室的信息，我们自然希望编程解决这个问题。

我们需要处理接下来 $n$ 天的借教室信息，其中第 $i$ 天学校有 $r_i$ 个教室可供租借。共有 $m$ 份订单，每份订单用三个正整数描述，分别为 $d_j,s_j,t_j$，表示某租借者需要从第 $s_j$ 天到第 $t_j$ 天租借教室（包括第 $s_j$ 天和第 $t_j$ 天），每天需要租借 $d_j$ 个教室。

我们假定，租借者对教室的大小、地点没有要求。即对于每份订单，我们只需要每天提供 $d_j$ 个教室，而它们具体是哪些教室，每天是否是相同的教室则不用考虑。

借教室的原则是先到先得，也就是说我们要按照订单的先后顺序依次为每份订单分配教室。如果在分配的过程中遇到一份订单无法完全满足，则需要停止教室的分配，通知当前申请人修改订单。这里的无法满足指从第 $s_j$ 天到第 $t_j$ 天中有至少一天剩余的教室数量不足 $d_j$ 个。

现在我们需要知道，是否会有订单无法完全满足。如果有，需要通知哪一个申请人修改订单。

## 输入格式

第一行包含两个正整数 $n,m$，表示天数和订单的数量。

第二行包含 $n$ 个正整数，其中第 $i$ 个数为 $r_i$，表示第 $i$ 天可用于租借的教室数量。

接下来有 $m$ 行，每行包含三个正整数 $d_j,s_j,t_j$，表示租借的数量，租借开始、结束分别在第几天。

每行相邻的两个数之间均用一个空格隔开。天数与订单均用从 $1$ 开始的整数编号。

## 输出格式

如果所有订单均可满足，则输出只有一行，包含一个整数 $0$。否则（订单无法完全满足）

输出两行，第一行输出一个负整数 $-1$，第二行输出需要修改订单的申请人编号。

## 样例 #1

### 样例输入 #1

```
4 3 
2 5 4 3 
2 1 3 
3 2 4 
4 2 4
```

### 样例输出 #1

```
-1 
2
```

## 提示

【输入输出样例说明】

第 $1 $份订单满足后，$4 $天剩余的教室数分别为 $0,3,2,3$。第 $2$ 份订单要求第 $2 $天到第 $4$ 天每天提供$ 3 $个教室，而第 $3$ 天剩余的教室数为$ 2$，因此无法满足。分配停止，通知第$2$ 个申请人修改订单。

【数据范围】

对于10%的数据，有$1≤ n,m≤ 10$；

对于30%的数据，有$1≤ n,m≤1000$；

对于 70%的数据，有$1 ≤ n,m ≤ 10^5$；

对于 100%的数据，有$1 ≤ n,m ≤ 10^6,0 ≤ r_i,d_j≤ 10^9,1 ≤ s_j≤ t_j≤ n$。


NOIP 2012 提高组 第二天 第二题

2022.2.20 新增一组 hack 数据

## 题解

> [!TIP]
> 1. `diff`是差分数组，`diff[i]`表示第i天的教室数量与第`i-1`天的教室数量的差值
> 2. `curNeedRoom`表示当前需要的教室数量
> 3. `arr[i]`表示第`i`天的空闲的教室数量

```java
import java.util.Scanner;

public class Main {
	public static class RentItem {
		public int num;
		public int begin;
		public int end;
	}
	public static int[] arr;
	public static RentItem[] rent;
	public static boolean check(int idx) {
		int[] diff = new int[arr.length + 10];
		for (int i = 1; i <= idx; ++i) {
			diff[rent[i].begin] += rent[i].num;
			diff[rent[i].end + 1] -= rent[i].num;
		}
		int curNeedRoom = 0;
		for (int i = 1; i < arr.length; ++i) {
			curNeedRoom += diff[i];
			if (curNeedRoom > arr[i]) return false;
		}
		return true;
	}
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int n = scan.nextInt();
		int m = scan.nextInt();
		arr = new int[n + 1];
		rent = new RentItem[m + 1];
		for (int i = 1; i <= n; ++i) {
			arr[i] = scan.nextInt();
		}
		for (int i = 1; i <= m; ++i) {
			rent[i] = new RentItem();
			rent[i].num = scan.nextInt();
			rent[i].begin = scan.nextInt();
			rent[i].end = scan.nextInt();
		}
		int left = 0;
		int right = m + 1;
		while(left + 1 < right) {
			int mid = ((right - left) >> 1) + left;
			if (check(mid)) left = mid;
			else right = mid;
		}
		if (right == m + 1) System.out.println(0);
		else System.out.println(-1 + "\n" + right);
		scan.close();
	}
}
```