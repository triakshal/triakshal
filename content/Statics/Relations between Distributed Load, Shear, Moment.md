If a beam is subjected to several concentrated forces, couple moments, and distributed loads, then the general method of constructing diagrams may be tedious. 
Differential relations exist between load, shear, and bending moments that simplify the procedure for constructing shear and bending moment diagrams. 

# Distributed Load and Shear

- Segment beams only in a section with a distributed load at point x
- Draw an FBD of small segment length delta $x$
- Notice delta $V$ and $M$ to maintain equilibrium
- $w(x)$ is replaced with delta $F$ , written as 
$$\Delta(F) = w(x) \Delta(x)$$
With location at fractional distance from right, written as $k\Delta(x)$; $0 < k < l$ and $k = \frac{1}{2}$ if $w(x)$ is uniform. 

This in mind, we can also say that the change in shear $\Delta(V)$ is the area under the loading curve, or the integral of $w(x)$ over some length. 


# Synopsis of Relationships

| Distributed Load and Shear | Shear and Moment |
|---------------------------|------------------|
| $\frac{dV}{dx} = w(x)$    | $\frac{dM}{dx} = V$ |
| **Slope of shear diagram = Distributed load intensity** | **Slope of moment diagram = Shear** |
| $\Delta V = \int w(x) dx$ | $\Delta M = \int V dx$ |
| **Change in shear = Area under loading curve** | **Change in moment = Area under shear diagram** |


In general procedure to make diagrams:
- Always start by finding reaction forces
- V and M graphs always begin and end at 0
- Distributed Loads
	- Create slopes in $V$
	- $\frac{dV}{dx} = w(x)$
	- Positive $w(X)$ is upwards
	- Change in shear between two points $\Delta(V) =$ area under $w(x)$ curves between the two points
- Concentrated loads create jumps in $V$
- Couple moments create jumps in $M$, opposite to their sign
	- CW couple moments don't affect shear, but the moment diagram jumps upward for the amount of moment
- Points of zero shear represent max or min moment since $\frac{dM}{dx} = 0$

#physics #statics 
