---
prev: A=LU
next: homogeneous-equation
---
# Space

## Vector Space
**Definition:** A vector space is a set of vectors that is closed under finite vector addition and scalar multiplication(linear combination).
**Closed:** If you add two vectors in the set, the result is still in the set. If you multiply a vector in the set by a scalar, the result is still in the set.
> For example, $R^3$ is a vector space containing all vectors with 3 components.

## Subspace
**Definition:** Vector space that is formed by a subset of vectors in a vector space.

### Not a Subspace:  
e.g. The first quadrant in $R^2$ is not a subspace because it is not closed under scalar multiplication.
### Is a Subspace:
- Possible subspace in $R^2$:
  1. zero vector
  2. line through origin 
  3. all of $R^2$
- Possible subspace in $R^3$:
  1. zero vector
  2. line through origin
  3. plane through origin
  4. all of $R^3$

## Column Space
Suppose we have linear equation $Ax=b$ and $A=\begin{bmatrix}1 & 1 & 2 \\ 2 & 1 & 3 \\ 3 & 1 & 4 \\ 4 & 1 & 5\end{bmatrix}$, then the column space of $A$ is the set of all linear combinations of the columns of $A$.  
In another word, $C(A) = \text{linear combination of} \begin{bmatrix}1 \\ 2 \\ 3 \\ 4\end{bmatrix} \text{,} \begin{bmatrix}1 \\ 1 \\ 1 \\ 1\end{bmatrix} \text{and} \begin{bmatrix}2 \\ 3 \\ 4 \\ 5\end{bmatrix}$.  
> However $\begin{bmatrix}2 \\ 3 \\ 4 \\ 5\end{bmatrix}$ has no contribution to the column space of $A$ because it is the linear combination of $\begin{bmatrix}1 \\ 2 \\ 3 \\ 4\end{bmatrix}$ and $\begin{bmatrix}1 \\ 1 \\ 1 \\ 1\end{bmatrix}$. So we can throw out the third column and get the 2D column space in $R^4$.

We have some question about the linear combination:

1. Which right-hand sides $b$ allow the equation $Ax=b$ to have a solution?  
   **Ans:** $b$ is vector in the column space of $A$. It means that there are some $b$ that can't be formed by the linear combination of the columns of $A$ and others can be formed by solution $x$.

2. The appearance of subspace $A$ and $x$?  
    **Ans:** $A$ is a 3D subspace in $R^4$ and $x$ is a 1D subspace in $R^3$. 

## Null Space
When $b=0$, the equation $Ax=b$ is called **homogeneous**. The set of all solutions to $Ax=0$ is called the **null space** of $A$.  
In another word, $N(A)$ is the subspace(a line go through the origin) that contains all vectors $x$ that satisfy $Ax=0$.

- Check that solutions to $Ax=0$ always gives a subspace.
  **Ans:** If $Av=0, Aw=0$, then $A(v+w)=Av+Aw=0$ and $A(12v)=12Av=0$. It means when $v, w \in N(A)$, then $v+w, 12v \in N(A)$.

> How about $b$ is not zero?  
> **Ans:** If $b$ is not zero, then the solution is not a subspace. It is plane/line don't go through the origin.
