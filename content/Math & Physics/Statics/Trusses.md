A truss is a structure composed of slender members joined together at their endpoints. 

For a given truss geometry and load, we want to find the forces and sizes of the truss members. 

Simple trusses generally have triangles that can be expanded by adding two members and a joint. In these cases, the number of members M and joints J are related by the formula 

M = 2J - 3.

We assume that 

- All loads are applied at the joints of trusses(the weight of the truss members themselves is usually negligible)
    
- The members are joined by smooth pins, as in cases where joints are formed by bolting ends of members together. 
    

Members act as two-force members; they’re loaded in either tension or compression. 

# Method of Joints

We draw all the forces acting at joints in a FBD, including external forces(applied loads and support reactions) and forces acting in the members. 

We solve for unknowns using equations of equilibrium; net horizontal force and net vertical force are 0. 

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcG6tzclheT9MpHExVFKpM5NLiA64YwkcSCG_4BCInlQX0o2r-EgtbHoWSM0AlHhDdDCxvRWOTgmJQKrhADJW8x84-e3ABuzfXgORdhP5cgHDXHstPe1x3uJwCCsf74kBx9s8ivuQ?key=ufN9qC7-pTZAF9GBUyc86I9x)![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf6eNOOQYd_p6Z8efMbDFc3Fe3Bkf09N8S4bPK4OyhQCOmQohnFFX4T3ohRQIk6oZkB6yNxRPFC5Mf-q1HQSdwyvtqwog-qhifzplk_PB4SRKvs2m-D5L9xGU3L4hCl5VZ0DUTM?key=ufN9qC7-pTZAF9GBUyc86I9x)

On the left is a truss structure, and on the right is the FBD at point B. 

If support reactions are not given, 

- Draw a FBD of the truss
- Determine support reactions using equations of equilibrium

Draw FBD of a joint with one or two unknowns, and assume all unknown member forces act in tension unless you can determine by inspection that the forces are compression loads. 

Apply scalar equations of equilibrium to solve for unknowns. If the answer is positive, the assumed direction of tension is correct. Repeat such a process for each joint until all required forces are found. 
# Zero Force Members

- If two non-collinear members form a joint and no external load or support reaction is applied to that joint, then the two members must be zero-force members. 
- If three members form a joint for which two members are collinear and there is no external load or support reaction at that joint, the non-collinear member is a zero-force member.
Zero-force members are necessary for stability and rigidity of structures, but support no load. 

Generally, the plan is:
- Check for zero-force members
- Draw FBDs of pins to solve for unknowns using equations of equilibrium.
- 
If there are over two unknown forces at a joint, it’s necessary to solve for support reactions first. We’ll have to draw the FBD of the entire truss, and then after solving for support reactions we analyse pin joints.


#physics #statics 

