# Matrix & Systems Review Summary

## Solve a system using back-substitution
Start from the last equation in a triangular system and substitute known values upward to solve.

---

## Solve a system of equations with 2 or 3 variables
Use **substitution**, **elimination**, or **matrix methods** to find solutions for all variables.

---

## Solve a system by Gaussian Elimination
Transform the augmented matrix to **row echelon form (REF)** using row operations, then apply back-substitution.

---

## Find the product of two matrices
Multiply rows by columns:

$$
(A \cdot B)_{ij} = \sum_k A_{ik} B_{kj}
$$

Only defined when the number of columns in A equals the number of rows in B.

---

## Find the transpose of a matrix
Swap rows and columns:

$$
A^T_{ij} = A_{ji}
$$

---

## Find an elementary matrix
A matrix formed by applying a **single row operation** to an identity matrix. Used to represent row operations via multiplication.

---

## Find the inverse of a 2×2 matrix

If:

$$
A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}
$$

Then:

$$
A^{-1} = \frac{1}{ad - bc} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}
$$

Only if \( \det(A) \ne 0 \).

---

## Find the inverse of a 3×3 matrix
Two methods:
- **Row operations on** $A | I \rightarrow I | A^{-1}$
- **Adjoint method**:

$$
A^{-1} = \frac{1}{\det(A)} \cdot \text{adj}(A)
$$

---

## Use an inverse matrix to solve a system

Given \( AX = B \):

$$
X = A^{-1}B
$$

Only valid when \( A \) is invertible.

---

## Find the determinant of a 2×2 matrix

$$
\det\begin{bmatrix} a & b \\ c & d \end{bmatrix} = ad - bc
$$

---

## Find the determinant of the inverse of a 2×2 matrix

$$
\det(A^{-1}) = \frac{1}{\det(A)}
$$

---

## Find the determinant of a 3×3 matrix
Use either:
- **Cofactor expansion**
- **Sarrus’ Rule** (diagonal method)

---

## Find minors and cofactors
- **Minor** of \( a_{ij} \): determinant of submatrix excluding row \( i \), column \( j \)
- **Cofactor**:

$$
C_{ij} = (-1)^{i+j} \cdot \text{minor}(a_{ij})
$$

---

## Use the definition of a determinant to find an unknown
Set up the determinant expression and solve for the unknown to meet given conditions.

---

## Identify a matrix as singular or non-singular
- **Singular**: \( \det(A) = 0 \) → no inverse
- **Non-singular**: \( \det(A) \ne 0 \) → inverse exists

---

## Solve a system using Cramer’s Rule

For \( AX = B \):

$$
x_i = \frac{\det(A_i)}{\det(A)}
$$

Where \( A_i \) is \( A \) with its \( i \)-th column replaced by \( B \).

---

## Use a determinant to find the area of a triangle

For points \( (x_1, y_1), (x_2, y_2), (x_3, y_3) \):

$$
\text{Area} = \frac{1}{2} \left| \det \begin{bmatrix} x_1 & y_1 & 1 \\ x_2 & y_2 & 1 \\ x_3 & y_3 & 1 \end{bmatrix} \right|
$$

---

## Determine if three points are collinear
Points are **collinear** if the determinant used in the triangle area formula is **zero**.

---

## Matrix addition, subtraction, scalar multiplication
- **Addition/Subtraction**: element-wise, same dimensions
- **Scalar multiplication**: each element multiplied by scalar \( k \)

---

## Find the adjoint of a matrix
The **adjoint** is the **transpose of the cofactor matrix**:

$$
\text{adj}(A) = C^T
$$

---
