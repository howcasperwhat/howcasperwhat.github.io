---
prev: linear-equation
next: multiplication-and-inversion
---
# Matrix Elimination
## Elimination
For example, we have three equations and three unknowns.
$$\begin{cases}
1x+2y+1z=2 \\
3x+8y+1z=12 \\
0x+4y+1z=2 \\
\end{cases}$$
Our purpose is to knock out the $x$ part of the equation 2, 3 and $y$ part of the equation 3.
$$A=\begin{bmatrix}1 & 2 & 1 \\ 3 & 8 & 1 \\ 0 & 4 & 1\end{bmatrix} \text{, }
x=\begin{bmatrix}x \\ y \\ z\end{bmatrix} \text{ and }
b=\begin{bmatrix}2 \\ 12 \\ 2\end{bmatrix}$$

$$A=\begin{bmatrix}1 & 2 & 1 \\ 3 & 8 & 1 \\ 0 & 4 & 1\end{bmatrix} \overset{R_2-3R_1}{\longrightarrow} \begin{bmatrix}1 & 2 & 1 \\ 0 & 2 & -2 \\ 0 & 4 & 1\end{bmatrix} \overset{R_3-2R_2}{\longrightarrow} \begin{bmatrix}1 & 2 & 1 \\ 0 & 2 & -2 \\ 0 & 0 & 5\end{bmatrix}$$

We can use elimination matrix to do the elimination.
For the case above, $E_{21}=\begin{bmatrix}1 & 0 & 0 \\ -3 & 1 & 0 \\ 0 & 0 & 1\end{bmatrix}$ and $E_{32}=\begin{bmatrix}1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & -2 & 1\end{bmatrix}$
So $E_{32}(E_{21}A)=U$ $U$ is the **upper triangular matrix**.
Matrix multiplication is **not commutative**, but can be **associative**.
So $E_{32}(E_{21}A)=U$ can be $(E_{32}E_{21})A=U$.

You can quickly gain the answer if you know the matrix-multiplication rule. [Click here to see the rule](multiplication-and-inversion.md).

Pivot is the first non-zero element in each row. For example, In the first step, pivot is $A_{11}$, and $A_{22}$ is the pivot in the second step.

After that you can use back substitution to get the equation's solution.

## Permutation Matrix
For example, permutation matrix $P=\begin{bmatrix}0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1\end{bmatrix}$ can exchange the first and second row of matrix $A$, permutation matrix $P=\begin{bmatrix}0 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 0\end{bmatrix}$ can exchange the first and third row of matrix $A$, permutation matrix $P=\begin{bmatrix}1 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & 1 & 0\end{bmatrix}$ can exchange the second and third row of matrix $A$...

> The Inverse of a permutation matrix is its transpose.

## Inverse Matrix
You can use matrix multiplication rule to quickly get the inverse matrix.

For the cases above, $(E_{32}E_{21})A=U$
$E_{32}=\begin{bmatrix}1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & -2 & 1\end{bmatrix}$ It means $r_3=r_3-2r_2$, so if we want to preserve the original matrix, we need to do $r_3=r_3+2r_2$, so $E_{32}^{-1}=\begin{bmatrix}1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 2 & 1\end{bmatrix}$.
Likewise, $E_{21}=\begin{bmatrix}1 & 0 & 0 \\ -3 & 1 & 0 \\ 0 & 0 & 1\end{bmatrix}$ It means $r_2=r_2-3r_1$, so if we want to preserve the original matrix, we need to do $r_2=r_2+3r_1$, so $E_{21}^{-1}=\begin{bmatrix}1 & 0 & 0 \\ 3 & 1 & 0 \\ 0 & 0 & 1\end{bmatrix}$.
$E_{21}^{-1}E_{32}^{-1}E_{32}E_{21}A=E_{21}^{-1}E_{32}^{-1}U$
$A=E_{21}^{-1}E_{32}^{-1}U$
Assume $E=E_{21}E_{32}$, then $A=E^{-1}U$
$\therefore E^{-1} = (E_{21}E_{32})^{-1} = E_{32}^{-1}E_{21}^{-1}$
You can also quickly get the $E^{-1}$ using matrix-multiplication rule.
$$E^{-1}=\begin{bmatrix}1 & 0 & 0 \\ 3 & 1 & 0 \\ 0 & 0 & 1\end{bmatrix}\begin{bmatrix}1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 2 & 1\end{bmatrix}=\begin{bmatrix}1 & 0 & 0 \\ 3 & 1 & 0 \\ 0 & 2 & 1\end{bmatrix}$$
