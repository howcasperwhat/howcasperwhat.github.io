# 115. Distinct Subsequences

## Problem
Given two strings `s` and `t`, return the number of distinct 
subsequences of `s` which equals `t`.  
The test cases are generated so that the answer fits on a 32-bit signed integer.

## Solutions

### Backtracking

``` java
class Solution {
    public String s, t;

    // How many `t[j...]` in `s[i...]`.
    public int dfs(int i, int j) {
        if (j >= t.length())
            return 1;
        if (i >= s.length())
            return 0;
        int count = 0;
        for (int $i = i; $i < s.length(); ++$i)
            if (s.charAt($i) == t.charAt(j))
                count += dfs($i + 1, j + 1);
        return count;
    }

    public int numDistinct(String s, String t) {
        this.s = s;
        this.t = t;
        return dfs(0, 0);
    }
}
```
> [!NOTE] Complexity Analysis
> `m = s.length(); n = t.length()`  
> Time complexity is an interesting question!  
> Assume we don't consider the influence of `n`, then we have $T(m) = \sum_{i=1}^{m-1}{T(i)}$.
> Assume that $a_m = T(n), S_m = \sum_{i=1}^{m}{a_i}$, then we have $a_m = S_{m-1}, a_1 = 1$.  
> $\therefore a_{m+1}-a_{m} = S_{m} - S_{m-1} (m \ge 2)$  
> $\therefore a_{m+1} = 2a_{m} (m \ge 2)$  
> $\because a_1 = 1$
> $\therefore a_2 = 1$  
> $\therefore a_{m} = 2^{m-2} (n \ge 2)$  
> $\therefore S_{m} = a_{m+1} = 2^{m-1} (m \ge 1)$  
> $\therefore T(m) = \sum_{i=1}^{m-1}{2^{i-1}} = S_{m-1} = 2^{m-2}$  
> But when we consider the influence of `n`, $a_m ... a_n$ will be truncated.
> $\therefore T(m, n) = 2^{m-2} - 2^{m-n-1}$
> - Time complexity: $O(2^m-2^{m-n})$
> - Space complexity: $O(1)$

> [!WARNING] Time Limit Exceeded
> 53/65 cases passed (N/A)


### Backtracking + Memoization

``` java
class Solution {
    public String s, t;

    public int[][] dp;

    // How many `t[j...]` in `s[i...]`.
    public int dfs(int i, int j) {
        if (j >= t.length())
            return 1;
        if (i >= s.length())
            return 0;
        if (dp[i][j] != -1)
            return dp[i][j];
        dp[i][j] = 0;
        for (int $i = i; $i < s.length(); ++$i)
            if (s.charAt($i) == t.charAt(j))
                dp[i][j] += dfs($i + 1, j + 1);
        return dp[i][j];
    }

    public int numDistinct(String s, String t) {
        this.s = s;
        this.t = t;
        dp = new int[s.length()][t.length()];
        for (int i = 0; i < s.length(); ++i)
            for (int j = 0; j < t.length(); ++j)
                dp[i][j] = -1;
        return dfs(0, 0);
    }
}
```
> [!NOTE] Complexity Analysis
> `m = s.length(); n = t.length()` 
> - Time complexity: $O(mn)$
> - Space complexity: $O(mn)$

> [!TIP] Accepted
> 65/65 cases passed (2805 ms)

### Dynamic Programming

Select $e_1, e_2, ...$ in `s` is equivalent to select $e_1$ and don't select $e_1$ in `s`.  
So we have dynamic programming equation:  
$$
dp[i][j] = \begin{cases}
dp[i+1][j+1] + dp[i+1][j] & s[i] = t[j] \\
dp[i+1][j] & s[i] \neq t[j]
\end{cases}
$$
Begin case:  
$$
dp[m][n] = \begin{cases}
1 & s[m] = t[n] \\
0 & s[m] \neq t[n]
\end{cases}
$$ 
$$ dp[m][i] = 0 (i \neq n) $$
$$
dp[i][n] = \begin{cases}
dp[i+1][n] & s[i] = t[n] \\
dp[i][n] & s[i] \neq t[n]
\end{cases}
$$
Memory optimization:  
$$
dp[j] = \begin{cases}
dp[j+1] + dp[j] & s[i] = t[j] \\
dp[j] & s[i] \neq t[j]
\end{cases}
$$
Begin case:
$$
dp[n] = \begin{cases}
1 & s[m] = t[n] \\
0 & s[m] \neq t[n]
\end{cases}
$$
$$ dp[i] = 0 (i \neq n) $$
You can assume that both `s` and `t` have an empty character at the end, so you don't need to consider the boundary conditions.  
``` java
class Solution {
    public int numDistinct(String s, String t) {
        int m = s.length(), n = t.length();
        int dp[] = new int[n + 1];
        dp[n] = 1;
        for (int i = m - 1; i >= 0; --i)
            for (int j = 0; j < n; ++j)
                if (s.charAt(i) == t.charAt(j))
                    dp[j] += dp[j + 1];
        return dp[0];
    }
}
```
> [!NOTE] Complexity Analysis
> `m = s.length(); n = t.length()`
> - Time complexity: $O(mn)$
> - Space complexity: $O(n)$

> [!TIP] Accepted
> 65/65 cases passed (9 ms)
