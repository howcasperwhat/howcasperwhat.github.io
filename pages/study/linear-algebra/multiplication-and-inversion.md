---
prev: matrix-elimination
next: A=LU
---
# Multiplication and Inversion
## Multiplication
$$\begin{bmatrix}a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33}\end{bmatrix}\begin{bmatrix}b_{11} & b_{12} & b_{13} \\ b_{21} & b_{22} & b_{23} \\ b_{31} & b_{32} & b_{33}\end{bmatrix}=\begin{bmatrix}c_{11} & c_{12} & c_{13} \\ c_{21} & c_{22} & c_{23} \\ c_{31} & c_{32} & c_{33}\end{bmatrix}$$

### Regular Way
Assume $r_i = [a_{i1}, a_{i2}, a_{i3}]$ and $c_i = [b_{1i}, b_{2i}, b_{3i}]$
$$c_{ij} = r_i \cdot c_j$$

### Block Matrix
$$\begin{bmatrix}A & B \\ C & D\end{bmatrix}\begin{bmatrix}E & F \\ G & H\end{bmatrix}=\begin{bmatrix}AE+BG & AF+BH \\ CE+DG & CF+DH\end{bmatrix}$$

### Row Way
$\begin{bmatrix}c_{11} & c_{12} & c_{13}\end{bmatrix}$ is the linear combination of $r_1$, $r_2$ and $r_3$ with coefficients in $b_1$.
$$\begin{bmatrix}c_{i1} & c_{i2} & c_{i3}\end{bmatrix} = b_{i1}\begin{bmatrix}a_{11} & a_{12} & a_{13}\end{bmatrix} + b_{i2}\begin{bmatrix}a_{21} & a_{22} & a_{23}\end{bmatrix} + b_{i3}\begin{bmatrix}a_{31} & a_{32} & a_{33}\end{bmatrix}$$

### Column Way
$\begin{bmatrix}c_{11} \\ c_{21} \\ c_{31}\end{bmatrix}$ is the linear combination of $c_1$, $c_2$ and $c_3$ with coefficients in $r_1$.
$$\begin{bmatrix}c_{i1} \\ c_{i2} \\ c_{i3}\end{bmatrix} = a_{i1}\begin{bmatrix}b_{11} \\ b_{21} \\ b_{31}\end{bmatrix} + a_{i2}\begin{bmatrix}b_{12} \\ b_{22} \\ b_{32}\end{bmatrix} + a_{i3}\begin{bmatrix}b_{13} \\ b_{23} \\ b_{33}\end{bmatrix}$$

## Inversion
In rectangular matrix, there are two kinds of inverse matrix: left inverse and right inverse. In square matrix, they are the same.

### Calculate Inverse
$$\begin{bmatrix}A & I\end{bmatrix} \overset{...E_{ij}}{\longrightarrow} \begin{bmatrix}I & W\end{bmatrix}$$
Now $W = A^{-1}$. You can prove it with the aid of a block matrix. $I=EA$, so $A^{-1} = E$, and $W = EI = A^{-1}I = A^{-1}$.
