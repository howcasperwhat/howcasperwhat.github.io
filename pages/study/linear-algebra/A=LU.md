---
prev: multiplication-and-inversion
next: vector-space
---
# A=LU

## LU Decomposition
> L means lower triangular matrix, U means upper triangular matrix.

In [Lecture_02](matrix-elimination.md), we know that $A=E^{-1}U$ and we have got $E^{-1}$ at the end of the lecture. We suppose $L=E^{-1}$, so $A=LU$.

Assume that we have $E_{32}=\begin{bmatrix}1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & -5 & 1\end{bmatrix}$ and $E_{21}=\begin{bmatrix}1 & 0 & 0 \\ -2 & 1 & 0 \\ 0 & 0 & 1\end{bmatrix}$, then $E=E_{32}E_{21}=\begin{bmatrix}1 & 0 & 0 \\ -2 & 1 & 0 \\ 10 & -5 & 1\end{bmatrix}$. And you can calculate $L=E^{-1}=\begin{bmatrix}1 & 0 & 0 \\ 2 & 1 & 0 \\ 0 & 5 & 1\end{bmatrix}$ using Gauss-Jordan elimination.

But if you calculate $E_{21}^{-1}$ and $E_{32}^{-1}$, you will find that $E^{-1}=E_{21}^{-1}E_{32}^{-1}=\begin{bmatrix}1 & 0 & 0 \\ 2 & 1 & 0 \\ 0 & 5 & 1\end{bmatrix}$. So we can get $E^{-1}$ directly.

> 1. Multiplication of lower triangular matrices is still lower triangular matrix.
> 2. If no row exchanged, multiplications go directly into $L$.

## Permutation
You can use permutation to exchange rows. For example, $P_{21}=\begin{bmatrix}0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1\end{bmatrix}$ means exchange row 1 and row 2. And $P_{32}=\begin{bmatrix}1 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & 1 & 0\end{bmatrix}$ means exchange row 2 and row 3.
> 1. $P^{-1}=P^T$.
> 2. In matrix elimination, if pivot is zero, we should exchange rows. Now $A=LU$ becomes $PA=LU$. It just exchanges A's rows to let pivot in each step be nonzero.

## Symmetric Matrix
Feature: $R^T=R$
> How to get symmetric matrix?
> $RR^T\Rightarrow \text{symmetric matrix}$ because $(RR^T)^T=R^{TT}R^T=RR^T$.

## Transpose
> 1. $(A^T)^T=A$
> 2. $(AB)^T=B^TA^T$
