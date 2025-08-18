---
next: matrix-elimination
---

<script setup>
import Fn from '../components/Fn.vue'
import Vec from '../components/Vec.vue'
</script>

# Linear Equation
For equation below, we can use **row picture** or **column picture** to solve it.
$$\begin{cases}
2x-y=0 \\
-x+2y=3
\end{cases}$$

## Row Picture
Just find the intersection of two lines.
<Fn :fns="[x => x * 2, x => (x + 3) / 2]" :xRange="[-2, 4]" :yRange="[-1, 3]" :dots="[[1, 2]]" />

## Column Picture
$$\begin{bmatrix}2 & -1 \\ -1 & 2\end{bmatrix}\begin{bmatrix}x \\ y\end{bmatrix}=\begin{bmatrix}0 \\ 3\end{bmatrix}$$
$$x\begin{bmatrix}2 \\ -1\end{bmatrix}+y\begin{bmatrix}-1 \\ 2\end{bmatrix}=\begin{bmatrix}0 \\ 3\end{bmatrix}$$

Just find which $(x, y)$'s linear combination of $(2, -1)$ and $(-1, 2)$ can get $(0, 3)$.
<Vec :vectors="[[2, -1], [-1, 2], [0, 3]]" :xRange="[-3, 3]" :yRange="[-1, 5]" />

You can find that $(0, 3)$ is the linear combination of $(2, -1)$ and $(-1, 2)$, so the equation has solution.
<Vec :vectors="[[2, -1], [-2, 4], [0, 3]]" :xRange="[-3, 3]" :yRange="[-1, 5]" :lines="[[[0, 3], [2, -1]], [[0, 3], [-2, 4]]]" />

So the solution is
$$\begin{bmatrix}x \\ y\end{bmatrix}=\begin{bmatrix}1 \\ 2\end{bmatrix}$$

## Ax = b
$A=\begin{bmatrix}2 & -1 \\ -1 & 2\end{bmatrix} \text{, }
x=\begin{bmatrix}x \\ y\end{bmatrix} \text{ and }
b=\begin{bmatrix}0 \\ 3\end{bmatrix}$

## Higher Dimension
For example, we have three equations and three unknowns.
$$\begin{cases}
2x-y-z=0 \\
-x+2y-z=3 \\
-x-y+2z=3
\end{cases}$$
Then the row picture is three planes in 3D space. And the column picture is three vectors in 3D space which is easier to understand than row picture.

## Singular / Not Invertible
1. For 2D space, if two lines are parallel, then they are not intersected, so the equation has no solution. It is also means that the two vectors are linear dependent(same or reverse direction), so the matrix is singular.
For example, the equation below has no solution. The two lines are parallel.
$$\begin{cases} 2x-y=0 \\ y-2x=1 \end{cases}$$
<Fn :fns="[x => x * 2, x => x * 2 + 1]" :xRange="[-2, 4]" :yRange="[-1, 3]" />
For example, the equation below has infinite solutions. The two vectors are reverse direction.
$$\begin{cases} -2x+2y=0 \\ x-y=1 \end{cases}$$
<Vec :vectors="[[2, -1], [-2, 1]]" :xRange="[-3, 3]" :yRange="[-1, 1]" />

2. For 3D space, if three planes are parallel, then they are not intersected, so the equation has no solution. It is also means that the three vectors are linear dependent(same or reverse direction), so the matrix is singular. If just two planes are parallel, then they are intersected in two line, so the equation has infinite solutions. It is also means that the matrix is singular.
