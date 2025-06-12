
### Sum of vectors, scalar multiples, linear combinations

- The **sum** of two vectors is found by adding their corresponding components.  
  If $\vec{u} = (u_1, u_2, ..., u_n)$ and $\vec{v} = (v_1, v_2, ..., v_n)$, then:  
  $$
  \vec{u} + \vec{v} = (u_1 + v_1, u_2 + v_2, ..., u_n + v_n)
  $$

- A **scalar multiple** of a vector means multiplying each component of the vector by a constant:  
  $$
  c\vec{v} = (cv_1, cv_2, ..., cv_n)
  $$

- A **linear combination** of vectors $\vec{v}_1, \vec{v}_2, ..., \vec{v}_n$ is any expression of the form:  
  $$
  c_1\vec{v}_1 + c_2\vec{v}_2 + \dots + c_n\vec{v}_n
  $$
  where $c_1, ..., c_n$ are scalars. You're combining vectors using addition and scalar multiplication.

---

### Write a vector as a linear combination of other vectors

- Given a set of vectors and a target vector, determine if the target vector can be written as a linear combination of the set.
- Set up a matrix equation:
  $$
  A\vec{x} = \vec{b}
  $$
  where $A$ is a matrix with the given vectors as columns, and solve for $\vec{x}$.
- If a solution exists, then $\vec{b}$ is a linear combination of the columns of $A$.

---

### Describe the zero vector in various vector spaces

- **$\mathbb{R}^n$**: The vector $(0, 0, ..., 0)$ with all components zero.
- **$P_n$**: The zero polynomial: $0x^n + 0x^{n-1} + \dots + 0$.
- **$M_{mn}$**: The $m \times n$ matrix where all entries are 0.

---

### Determine if a set is a vector space

To be a vector space, a set must:
- Contain the zero vector.
- Be closed under addition and scalar multiplication.
- Satisfy 10 axioms (like associativity, identity, inverse, distributivity, etc.).
- Usually, we test whether a subset of a known vector space satisfies the vector space axioms.

---

### Determine if a set is a subspace

A subspace of a vector space must:
1. Contain the zero vector.
2. Be closed under **vector addition**: If $\vec{u}, \vec{v}$ are in the set, then $\vec{u} + \vec{v}$ is too.
3. Be closed under **scalar multiplication**: If $\vec{v}$ is in the set and $c$ is any scalar, then $c\vec{v}$ is in the set.

---

### Determine if a set spans $\mathbb{R}^n$

- A set of vectors **spans** $\mathbb{R}^n$ if **any** vector in $\mathbb{R}^n$ can be written as a linear combination of them.
- Equivalent to: the matrix formed by the vectors has a **pivot in every row** after row reduction.

---

### Determine if vectors are linearly dependent or independent

- A set is **linearly dependent** if:
  $$
  c_1\vec{v}_1 + \dots + c_n\vec{v}_n = \vec{0}
  $$
  has a **non-trivial solution** (not all $c_i = 0$).

- A set is **linearly independent** if the only solution is the trivial one:
  $c_1 = c_2 = \dots = c_n = 0$.

- To test: Form a matrix with the vectors as columns and solve $A\vec{x} = \vec{0}$.

---

### Determine if a set is a basis

A set of vectors is a **basis** if:
- They **span** the vector space.
- They are **linearly independent**.

If the dimension of the space is $n$, you need exactly $n$ linearly independent vectors to form a basis.

---

### Find the rank and nullity of a matrix

- **Rank**: The number of pivot columns in the row-reduced form of the matrix. Represents the dimension of the column space.
- **Nullity**: The number of free variables in the solution to $A\vec{x} = 0$.
- Formula:  
  $$
  \text{rank}(A) + \text{nullity}(A) = \text{number of columns}
  $$

---

### Basis for a subspace spanned by a set

- To find a basis for the subspace spanned by a set:
  - Put the vectors as rows or columns of a matrix.
  - Row reduce.
  - The original vectors corresponding to the pivot columns form the basis.

---

### Basis and dimension of solution space to $A\vec{x} = 0$

- Solve the homogeneous system.
- Express the solution in **parametric vector form**.
- The vectors that multiply the free variables form a basis.
- The number of these vectors = **dimension of the null space**.

---

### Determine if a vector is in the column space

- Given matrix $A$ and vector $\vec{b}$:
  - Form the augmented matrix $[A \mid \vec{b}]$.
  - If the system is consistent (no contradictions), then $\vec{b}$ is in the column space of $A$.

---

### Transition matrix from $B$ to $B'$, or $B'$ to $B$

- A **transition matrix** changes coordinates from one basis to another.
- To find matrix from $B$ to $B'$:
  - Express each vector of $B'$ as a linear combination of vectors in $B$.
  - Place these coordinates as columns of the matrix.

---

### Wronskian of a set of functions

- Given functions $f_1, f_2, \dots, f_n$, their Wronskian is:
  $$
  W(f_1, \dots, f_n) = \begin{vmatrix}
  f_1 & f_2 & \dots \\
  f_1' & f_2' & \dots \\
  \vdots & \vdots & \ddots
  \end{vmatrix}
  $$
- If $W \neq 0$ on an interval, the functions are **linearly independent** on that interval.

---

### Write a proof based on dependence, independence, subsets

- Use definitions:
  - If one vector is a linear combination of others, the set is dependent.
  - A subset of an independent set is also independent.
  - Adding a vector to a dependent set keeps it dependent.
- Structure your proof by assuming or proving dependence/independence based on these principles.

---

### Vector operations and notation

- **Length (magnitude)**:  
  $$
  \|\vec{v}\| = \sqrt{v_1^2 + v_2^2 + \dots + v_n^2}
  $$

- **Distance** between vectors:  
  $$
  \text{dist}(\vec{v}, \vec{w}) = \|\vec{v} - \vec{w}\|
  $$

- **Inner product (dot product)**:  
  $$
  \vec{v} \cdot \vec{w} = v_1w_1 + v_2w_2 + \dots + v_nw_n
  $$

---

### Angle between two vectors

- Formula:  
  $$
  \cos(\theta) = \frac{\vec{v} \cdot \vec{w}}{\|\vec{v}\| \|\vec{w}\|}
  $$
- Use this to find the angle or to verify orthogonality ($\cos(\theta) = 0$ when vectors are perpendicular).

---

### Orthogonal and orthonormal sets

- **Orthogonal**: All pairs of vectors have dot product 0.
- **Orthonormal**: Orthogonal set where each vector has length 1.
- Check:  
  - $\vec{v}_i \cdot \vec{v}_j = 0$ for $i \neq j$  
  - $\|\vec{v}_i\| = 1$ for all $i$

---

### Unit vector in same direction

- A **unit vector** has length 1.
- To create a unit vector in the same direction as $\vec{v}$:
  $$
  \hat{v} = \frac{\vec{v}}{\|\vec{v}\|}
  $$

---

### Gram-Schmidt Process

- Converts a set of linearly independent vectors into an **orthogonal** (or orthonormal) set.

Given $\vec{v}_1, \vec{v}_2$:

1. Let $\vec{w}_1 = \vec{v}_1$
2. Subtract the projection of $\vec{v}_2$ onto $\vec{w}_1$:
   $$
   \vec{w}_2 = \vec{v}_2 - \frac{\langle \vec{v}_2, \vec{w}_1 \rangle}{\langle \vec{w}_1, \vec{w}_1 \rangle} \vec{w}_1
   $$

3. Normalize to get orthonormal vectors:
   $$
   \hat{w}_i = \frac{\vec{w}_i}{\|\vec{w}_i\|}
   $$

Remember to normalize at the end if the problem asks for orthonormal vectors.

--- 
#linear #math

