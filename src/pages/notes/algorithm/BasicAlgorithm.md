# Basic Algorithm
## Find Prime Number

::: tabbar
@ Brute Force
```java
public static int[] rangePrime1(int n) {
  int cnt = 0;
  int[] result = new int[n + 1];
  for (int i = 2; i <= n; ++i) {
    boolean isPrime = true;
    for (int j = 2; j * j <= i; ++j)
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    if (isPrime)
      result[cnt++] = i;
  }
  return Arrays.copyOf(result, cnt);
}
```

@ Eratosthenes Sieve
```java
public static int[] rangePrime2(int n) {
  int cnt = 0;
  int[] result = new int[n + 1];
  boolean[] notPrime = new boolean[n + 1];
  for (int i = 2; i <= n; ++i) {
    if (!notPrime[i]) {
      result[cnt++] = i;
      for (int j = 2; j * i <= n; ++j)
        notPrime[i * j] = true;
    }
  }
  return Arrays.copyOf(result, cnt);
}
```

@ Linear Sieve
```java
public static int[] rangePrime3(int n) {
  int cnt = 0;
  int[] result = new int[n + 1];
  boolean[] notPrime = new boolean[n + 1];
  for (int i = 2; i <= n; ++i) {
    if (!notPrime[i]) 
      result[cnt++] = i;
    for (int j = 0; j < cnt && i * result[j] <= n; ++j) {
      notPrime[i * result[j]] = true;
      if (i % result[j] == 0) break;
    }
  }
  return Arrays.copyOf(result, cnt); 
}
```
:::

## GCD and LCM
::: tabbar
@ GCD
``` java
public static int gcd(int a, int b) {
  if (a == 0)
    return b;
  return gcd(b % a, a);
}
```

@ LCM
``` java
public static int lcm(int a, int b) {
  return a * b / gcd(a, b);
}
```
:::

## Fast Power
::: tabbar
@ Fast Power 🤖
``` java
public static int fastPower(int a, int b, int mod) {
  int ans = 1;
  while (b > 0) {
    if ((b & 1) == 1)
      ans = ans * a % mod;
    a = a * a % mod;
    b >>= 1;
  }
  return ans;
}
```
:::

## Shortest Path
::: tabbar
@ Dijkstra
``` java
public static int[] dijkstra(int[][] graph, int start) {
  int length = graph.length;
  boolean[] found = new boolean[length];
  int[] dist = new int[length];
  Arrays.fill(dist, Integer.MAX_VALUE);
  dist[start] = 0;
  for (int i = 0; i < length; ++i) {
    int u = -1;
    for (int j = 0; j < length; ++j) {
      if (!found[j] && (u == -1 || dist[j] < dist[u])) {
        u = j;
      }
    }
    found[u] = true;
    for (int j = 0; j < length; ++j) {
      if (!found[j] && graph[u][j] != -1) {
        dist[j] = Math.min(dist[j], dist[u] + graph[u][j]);
      }
    }
  }
  return dist;
}
```

@ Floyd
``` java
public static int[][] floyd(int[][] graph) {
  int length = graph.length;
  int[][] dist = new int[length][length];
  for (int i = 0; i < length; ++i) {
    for (int j = 0; j < length; ++j) {
      dist[i][j] = graph[i][j];
    }
  }
  for (int k = 0; k < length; ++k) {
    for (int i = 0; i < length; ++i) {
      for (int j = 0; j < length; ++j) {
        if (dist[i][k] != -1 && dist[k][j] != -1) {
          if (dist[i][j] == -1 || dist[i][j] > dist[i][k] + dist[k][j]) {
            dist[i][j] = dist[i][k] + dist[k][j];
          }
        }
      }
    }
  }
  return dist;
}
```
:::

## Minimum Spanning Tree
::: tabbar
@ Prim
``` java
public static int[] prim(int[][] graph, int start) {
  int length = graph.length;
  boolean[] found = new boolean[length];
  int[] dist = new int[length];
  Arrays.fill(dist, Integer.MAX_VALUE);
  dist[start] = 0;
  for (int i = 0; i < length; ++i) {
    int u = -1;
    for (int j = 0; j < length; ++j) {
      if (!found[j] && (u == -1 || dist[j] < dist[u])) {
        u = j;
      }
    }
    found[u] = true;
    for (int j = 0; j < length; ++j) {
      if (!found[j] && graph[u][j] != -1) {
        dist[j] = Math.min(dist[j], graph[u][j]);
      }
    }
  }
  return dist;
}
```

@ Kruskal 🤖
``` java
public static int kruskal(int[][] graph) {
  int length = graph.length;
  int[] parent = new int[length];
  for (int i = 0; i < length; ++i) {
    parent[i] = i;
  }
  int ans = 0;
  for (int i = 0; i < length; ++i) {
    for (int j = 0; j < length; ++j) {
      if (graph[i][j] != -1) {
        int x = find(parent, i);
        int y = find(parent, j);
        if (x != y) {
          parent[x] = y;
          ans += graph[i][j];
        }
      }
    }
  }
  return ans;
}
private static int find(int[] parent, int x) {
  if (parent[x] != x) {
    parent[x] = find(parent, parent[x]);
  }
  return parent[x];
}
```
:::

## Knapsack Problem
::: tabbar
@ 0-1 Knapsack
``` java
int $01Package(int[] m, int[] c, int N, int V) {
  // init dp array
  int[][] dp = new int[N][V+1];
  // default value in dp is 0
  // so we don't need to init dp[?][0] 
  for (int i = 0; i < N; i++) {
    dp[i][0] = 0;
  }
  for (int j = 0; j <= V; j++) {
    dp[0][j] = (j >= m[0]) ? c[0] : 0;
  }
  // dp
  for (int i = 1; i < N; i++) {
    for (int j = 1; j <= V; j++) {
      if (j < m[i]) {
        dp[i][j] = dp[i-1][j];
      } else {
        dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-m[i]] + c[i]);
      }
    }
  }
  return dp[N-1][V];
}
```

@ 0-1 Knapsack Optimized
``` java
int $01Package(int[] m, int[] c, int N, int V) {
  int[] dp = new int[V+1];
  for (int i = 0; i < N; i++) {
    for (int j = V; j >= m[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j-m[i]] + c[i]);
    }
  }
  return dp[V];
}
```

@ Complete Knapsack 🤖
``` java
int completePackage(int[] m, int[] c, int N, int V) {
  int[] dp = new int[V+1];
  for (int i = 0; i < N; i++) {
    for (int j = m[i]; j <= V; j++) {
      dp[j] = Math.max(dp[j], dp[j-m[i]] + c[i]);
    }
  }
  return dp[V];
}
```

@ Multiple Knapsack 🤖
``` java
int multiplePackage(int[] m, int[] c, int[] n, int N, int V) {
  int[] dp = new int[V+1];
  for (int i = 0; i < N; i++) {
    for (int j = V; j >= m[i]; j--) {
      for (int k = 1; k <= n[i] && k * m[i] <= j; k++) {
        dp[j] = Math.max(dp[j], dp[j-k*m[i]] + k*c[i]);
      }
    }
  }
  return dp[V];
}
```
:::

## Segment Tree
::: tabbar
@ Class Frame
``` java
public class SegmentTree {
	private int MAXN;
	private int[] array;
	private int[] sum;
	private int[] lazy;
	private int[] change;
	private boolean[] update;
	public SegmentTree(int[] origin) {...}
	public void build(int l, int r, int rt) {...}
	private void pushUp(int rt) {...}
	private void pushDown(int rt, int ln, int rn) {...}
	public void add(int L, int R, int C,
                    int l, int r, int rt) {...}
	public void update(int L, int R, int C,
					   int l, int r, int rt) {...}
	public long query(int L, int R,
					  int l, int r, int rt) {...}
}
```

@ Constructor
``` java
public SegmentTree(int[] origin) {
  MAXN = origin.length + 1;
  array = new int[MAXN];
  for (int i = 1; i < MAXN; ++i)
    array[i] = origin[i - 1];
  sum = new int[MAXN << 2];
  lazy = new int[MAXN << 2];
  change = new int[MAXN << 2];
  update = new boolean[MAXN << 2];
}
```

@ Build
``` java
public void build(int l, int r, int rt) {
  if (l == r) {
    sum[rt] = array[l];
  } else {
    int mid = l + ((r - l) >> 1);
    build(l, mid, rt << 1);
    build(mid + 1, r, rt << 1 | 1);
    pushUp(rt);
  }
}
```

@ PushUp/PushDown
``` java
private void pushUp(int rt) {
  sum[rt] = sum[rt << 1] + sum[rt << 1 | 1];
}
private void pushDown(int rt, int ln, int rn) {
  if (update[rt]) {
    update[rt << 1] = true;
    update[rt << 1 | 1] = true;
    change[rt << 1] = change[rt];
    change[rt << 1 | 1] = change[rt];
    lazy[rt << 1] = 0;
    lazy[rt << 1 | 1] = 0;
    sum[rt << 1] = change[rt] * ln;
    sum[rt << 1 | 1] = change[rt] * rn;
    update[rt] = false;
  }
  if (lazy[rt] != 0) {
    lazy[rt << 1] += lazy[rt];
    sum[rt << 1] += ln * lazy[rt];
    lazy[rt << 1 | 1] += lazy[rt];
    sum[rt << 1 | 1] += rn * lazy[rt];
    lazy[rt] = 0;
  }
}
```

@ Add
``` java
public void add(int L, int R, int C,
                int l, int r, int rt) {
  if (L <= l && r <= R) {
    lazy[rt] += C;
    sum[rt] += C * (r - l + 1);
  } else {
    int mid = l + ((r - l) >> 1);
    pushDown(rt, mid - l + 1, r - mid);
    if (L <= mid)
      add(L, R, C, l, mid, rt << 1);
    if (mid + 1 <= R)
      add(L, R, C, mid + 1, r, rt << 1 | 1);
    pushUp(rt);			
  }
}
```

@ Update
``` java
public void update(int L, int R, int C,
            int l, int r, int rt) {
  if (L <= l && r <= R) {
    update[rt] = true;
    change[rt] = C;
    sum[rt] = C * (r - l + 1);
    lazy[rt] = 0;
  } else {
    int mid = l + ((r - l) >> 1);
    pushDown(rt, mid - l + 1, r - mid);
    if (L <= mid)
      update(L, R, C, l, mid, rt << 1);
    if (mid + 1 <= R)
      update(L, R, C, mid + 1, r, rt << 1 | 1);
    pushUp(rt);
  }
}
```

@ Query
``` java [Query]
public long query(int L, int R,
          int l, int r, int rt) {
  long result = 0;
  if (L <= l && r <= R) {
    result = sum[rt];
  } else {
    int mid = l + ((r - l) >> 1);
    pushDown(rt, mid - l + 1, r - mid);
    if (L <= mid)
      result += query(L, R, l, mid, rt << 1);
    if (mid + 1 <= R)
      result += query(L, R, mid + 1, r, rt << 1 | 1);
  }
  return result;
}
```
:::


## Linked List Algorithm

::: tabbar

@ Linked List Cycle
``` ts
function hasCycle(head: ListNode | null): boolean {
  let [slow, fast] = [head, head]
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) return true
  }
  return false
}
```

@ Linked List Cycle II
``` ts
function detectCycle(head: ListNode | null): ListNode | null {
  let [slow, fast] = [head, head]
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) 
      break
  }
  if (!fast || !fast.next) 
    return null
  fast = head
  while (slow !== fast) {
    slow = slow.next
    fast = fast.next
  }
  return slow
}
```
:::