# 84. Largest Rectangle in Histogram

## Problem
Given an array of integers `heights` representing the histogram's bar height where the width of each bar is `1`, return the area of the largest rectangle in the histogram.

## Solutions

### Monotonic-Queue (Traversal width)

``` java
import java.util.ArrayDeque;
import java.util.Deque;

class Solution {
    class Histogram {
        public int index, height;

        public Histogram(int index, int height) {
            this.index = index;
            this.height = height;
        }
    }

    public int largestRectangleArea(int[] heights) {
        int length = heights.length;
        Histogram[] histograms = new Histogram[length];
        int ans = 0;
        for (int i = 0; i < length; ++i)
            histograms[i] = new Histogram(i, heights[i]);
        for (int width = 1; width <= length; ++width) {
            Deque<Histogram> mono = new ArrayDeque<>();
            int i = 0;
            for (; i < width; ++i) {
                while (!mono.isEmpty() && mono.peekLast().height > histograms[i].height)
                    mono.pollLast();
                mono.offerLast(histograms[i]);
            }
            ans = Math.max(ans, width * mono.peekFirst().height);
            for (; i < length; ++i) {
                while (!mono.isEmpty() && mono.peekFirst().index < i - width + 1)
                    mono.pollFirst();
                while (!mono.isEmpty() && mono.peekLast().height > histograms[i].height)
                    mono.pollLast();
                mono.offerLast(histograms[i]);
                ans = Math.max(ans, width * mono.peekFirst().height);
            }
        }
        return ans;
    }
}
```
> [!NOTE] Complexity Analysis
> - Time complexity: $O(n^2)$
> - Space complexity: $O(n)$

> [!WARNING] Time Limit Exceeded
> 87/98 cases passed (N/A)

### Brute-Force (Traversal range)

``` java
class Solution {
    public int largestRectangleArea(int[] heights) {
        int length = heights.length;
        int ans = 0;
        for (int i = 0; i < length; ++i) {
            int minHeight = Integer.MAX_VALUE;
            for (int j = i; j < length; ++j) {
                minHeight = Math.min(minHeight, heights[j]);
                ans = Math.max(ans, minHeight * (j - i + 1));
            }
        }
        return ans;
    }
}
```

>[!NOTE] Complexity Analysis
>- Time complexity: $O(n^2)$
>- Space complexity: $O(1)$

> [!WARNING] Time Limit Exceeded
> 90/98 cases passed (N/A)

### Monotonic-Stack (Traversal height)

``` java
import java.util.Arrays;
import java.util.Stack;

class Solution {
    public int largestRectangleArea(int[] heights) {
        int length = heights.length;
        Stack<Integer> mono = new Stack<>();
        int[] lefts = new int[length];
        int[] rights = new int[length];
        Arrays.fill(rights, length - 1);
        for (int i = 0; i < length; ++i) {
            while (!mono.empty() && heights[mono.peek()] >= heights[i])
                rights[mono.pop()] = i - 1;
            if (!mono.empty())
                lefts[i] = mono.peek() + 1;
            mono.push(i);
        }
        int ans = 0;
        for (int i = 0; i < length; ++i)
            ans = Math.max(ans, heights[i] * (rights[i] - lefts[i] + 1));
        return ans;
    }
}
```

>[!NOTE] Complexity Analysis
>- Time complexity: $O(n)$
>- Space complexity: $O(n)$

> [!TIP] Accepted
> 98/98 cases passed (162 ms)
