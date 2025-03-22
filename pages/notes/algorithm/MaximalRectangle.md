# 85. Maximal Rectangle

## Problem
Given a `rows x cols` binary `matrix` filled with `0`'s and `1`'s, find the largest rectangle containing only `1`'s and return its area.  

## Solutions

### Prefix-Sum + Sliding-Window

``` java 
class Solution {
    public int maximalRectangle(char[][] matrix) {
        if (matrix.length == 0)
            return 0;
        int row = matrix.length;
        int col = matrix[0].length;
        int[][] sums = new int[row + 1][col + 1];
        for (int i = 1; i < row + 1; ++i)
            for (int j = 1; j < col + 1; ++j)
                sums[i][j] = sums[i][j - 1] + sums[i - 1][j] 
                    - sums[i - 1][j - 1] + (matrix[i - 1][j - 1] - '0');
        int max = 0;
        for (int iBegin = 1; iBegin < row + 1; ++iBegin) {
            for (int iEnd = iBegin; iEnd < row + 1; ++iEnd) {
                int jBegin = 1, jEnd = 1;
                while (jEnd < col + 1) {
                    int sum = sums[iEnd][jEnd] - sums[iEnd][jBegin - 1] 
                        - sums[iBegin - 1][jEnd] + sums[iBegin - 1][jBegin - 1];
                    if (sum == (iEnd - iBegin + 1) * (jEnd - jBegin + 1)) {
                        max = Math.max(max, sum);
                        ++jEnd;
                    } else {
                        jEnd = jBegin = jEnd + 1;
                    }
                }
            }
        }
        return max;
    }
}
```

> [!NOTE] Complexity Analysis
> matrix: $m \times n$
> - Time complexity: $O(m^2n)$  
> - Space complexity: $O(mn)$

> [!TIP] Accepted
> 74/74 cases passed (30 ms)

### Monotonic-Stack + Dynamic-Programming

``` java
import java.util.Stack;

class Solution {
    public int maximalRectangle(char[][] matrix) {
        if (matrix.length == 0)
            return 0;
        int row = matrix.length;
        int col = matrix[0].length;
        Stack<Integer> mono = new Stack<>();
        int[] lefts = new int[col + 1];
        int[] rights = new int[col + 1];
        int[] heights = new int[col + 1];
        int ans = 0;
        for (int i = 1; i < row + 1; ++i) {
            mono.clear();
            for (int j = 1; j < col + 1; ++j) {
                lefts[j] = 1;
                rights[j] = col;
                heights[j] = matrix[i - 1][j - 1] == '1' ? heights[j] + 1 : 0;
            }
            for (int j = 1; j < col + 1; ++j) {
                while (!mono.empty() && heights[mono.peek()] >= heights[j])
                    rights[mono.pop()] = j - 1;
                if (!mono.empty())
                    lefts[j] = mono.peek() + 1;
                mono.push(j);
            }
            for (int j = 1; j < col + 1; ++j)
                ans = Math.max(ans, heights[j] * (rights[j] - lefts[j] + 1));
        }
        return ans;
    }
}
```

> [!NOTE] Complexity Analysis
> matrix: $m \times n$
> - Time complexity: $O(mn)$
> - Space complexity: $O(n)$

> [!TIP] Accepted
> 74/74 cases passed (36 ms)
