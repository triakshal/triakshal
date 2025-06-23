
### Cross product of vectors

The cross product u×v results in a vector perpendicular to both u and v.

- **Linear Combination Form**: Given u=u1​i+u2​j+u3​k and v=v1​i+v2​j+v3​k: u×v=(u2​v3​−u3​v2​)i−(u1​v3​−u3​v1​)j+(u1​v2​−u2​v1​)k
- **(x, y, z) Form / Determinant Method**: u×v=det![](data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="0.333em" height="3.600em" viewBox="0 0 333 3600"><path d="M145 15 v585 v2400 v585 c2.667,10,9.667,15,21,15%0Ac10,0,16.667,-5,20,-15 v-585 v-2400 v-585 c-2.667,-10,-9.667,-15,-21,-15%0Ac-10,0,-16.667,5,-20,15z M188 15 H145 v585 v2400 v585 h43z"></path></svg>)​iu1​v1​​ju2​v2​​ku3​v3​​![](data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="0.333em" height="3.600em" viewBox="0 0 333 3600"><path d="M145 15 v585 v2400 v585 c2.667,10,9.667,15,21,15%0Ac10,0,16.667,-5,20,-15 v-585 v-2400 v-585 c-2.667,-10,-9.667,-15,-21,-15%0Ac-10,0,-16.667,5,-20,15z M188 15 H145 v585 v2400 v585 h43z"></path></svg>)​

---

### Use the cross product to find a perpendicular vector

The resulting vector from the cross product, w=u×v, is **orthogonal (perpendicular)** to both vector u and vector v.

---

### Find the area of a parallelogram

The area of a parallelogram with adjacent sides defined by vectors u and v is the **magnitude of their cross product**.

Area=∥u×v∥

---

### Find the image and preimage of a vector

- **Image**: Given a transformation T and a vector v, the image is the resulting vector T(v).
- **Preimage**: Given a transformation T and an image vector w, the preimage is the original vector v such that T(v)=w.

---

### Determine if a transformation is linear

A transformation T is **linear** if it satisfies two conditions for all vectors u, v and any scalar c:

1. **Additivity**: T(u+v)=T(u)+T(v)
2. **Homogeneity**: T(cu)=cT(u)

---

### Given a linear transformation, find the kernel and range

- **Kernel**: The set of all input vectors v that map to the zero vector: ker(T)={v∣T(v)=0}.
- **Range**: The set of all possible output vectors; the set of all images T(v). Also known as the **image** of T.

---

### Given a matrix, find the kernel, nullity, range, and rank

- **Kernel**: The solution space of the homogeneous equation Ax=0.
- **Nullity**: The **dimension** of the kernel. It is the number of non-pivot columns (free variables) in the row echelon form of A.
- **Range**: The **column space** of A. Its basis is the set of pivot columns from the original matrix A.
- **Rank**: The **dimension** of the range (column space). It is the number of pivots in the row echelon form of A.

---

### Find nullity given rank, or the reverse

Use the Rank-Nullity Theorem, which states that for a matrix with n columns:

rank(A)+nullity(A)=n

---

### Find the standard matrix for a transformation

The **standard matrix** A for a linear transformation T is constructed by using the images of the standard basis vectors as its columns.

A=[T(e1​)T(e2​)…T(en​)]

Once found, you can find the image of any vector v by computing T(v)=Av.

---

### Find the standard matrix for the composition of transformations

The standard matrix of a composite transformation T=T2​∘T1​ (where T1​ is applied first) is the **product of the individual standard matrices** in reverse order of application.

If A1​ is the matrix for T1​ and A2​ is the matrix for T2​, the matrix for T is:

A=A2​A1​

---

### Find the coordinates of a point under a reflection, rotation, etc.

To find the coordinates of a transformed point, multiply the **standard matrix** for that geometric transformation (e.g., rotation, reflection) by the column vector representing the point's coordinates.

---

### Find the characteristic equation, eigenvalues, and eigenvectors

- **Characteristic Equation**: An equation used to find the eigenvalues of a square matrix A. It is given by: det(A−λI)=0
- **Eigenvalues** (λ): The scalar solutions to the characteristic equation.
- **Eigenvectors** (v): The non-zero vectors that, for a given eigenvalue λ, satisfy the equation (A−λI)v=0. A **basis for the eigenspace** consists of the linearly independent eigenvectors for that eigenvalue.

---

### Find a matrix P that will diagonalize a given matrix

A matrix A is **diagonalizable** if it has as many linearly independent eigenvectors as it has columns. The matrix P that diagonalizes A is constructed by using these **linearly independent eigenvectors** as its columns.

---

### Diagonalize a matrix

To diagonalize a matrix A, you find an invertible matrix P and a diagonal matrix D such that D=P−1AP.

1. Find the **eigenvalues** of A.
2. Find a basis of **linearly independent eigenvectors** for A.
3. Construct the matrix **P** using the eigenvectors as columns.
4. Construct the diagonal matrix **D** using the corresponding eigenvalues along the main diagonal. The order must match the order of eigenvectors in P.

---

### Is a matrix symmetric? orthogonal?

- **Symmetric**: A matrix A is symmetric if it equals its transpose (A=AT).
- **Orthogonal**: A square matrix A is orthogonal if its columns form an orthonormal set, which means its transpose is its inverse (AT=A−1).

---

### Find an orthogonal matrix that diagonalizes a given matrix

A matrix can be **orthogonally diagonalized** only if it is **symmetric**.

1. Find the eigenvalues and corresponding eigenvectors for the symmetric matrix A.
2. If any eigenspace has a dimension greater than 1, use the **Gram-Schmidt process** on its basis vectors to create an orthogonal basis.
3. **Normalize** all eigenvectors by dividing each by its magnitude. This creates an orthonormal set of eigenvectors.
4. Construct the orthogonal matrix **P** using these orthonormal eigenvectors as its columns.

#linear #math