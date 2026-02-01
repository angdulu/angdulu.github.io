---
layout: single
title: "From Calculus to Design: Optimizing the Shape of a Can"
typora-root-url: ../
author_profile: false
mathjax: true
category: "Engineering & Systems"
toc: true
---

# Contextual Applications of Differentiation

When you pick up a 500 mL drink can, have you ever wondered if its shape is mathematically optimal for holding that volume with minimum material?

<img src="/assets/images/2025-10-18-optimization/Screenshot 2025-10-25 at 8.33.11 PM.png" style="zoom:33%;" />

Let’s find out.
 (assume the can is a perfect cylinder, ignoring the weird curved top and bottom shape.)

##  Step 0. Background research

![Screenshot 2025-10-25 at 7.06.33 PM](/assets/images/2025-10-18-optimization/Screenshot 2025-10-25 at 7.06.33 PM.png)

<sub> source: trust me bro 😎

##  Step 1. Known Information

- **Volume:** $V = 500\ \text{mL} = 500\ \text{cm}^3$

- **Typical Can Dimensions:**
  
   $h = 16.8\ \text{cm}$
   
   $r = 3.3\ \text{cm}$

##  Step 2. Volume Formula

For a cylinder,


$$
V = \pi r^2 h
$$


Solving for $h$:

$$
h = \frac{V}{\pi r^2}
$$



$$
h = \frac{500}{\pi r^2}
$$


​				
​					

##  Step 3. Surface Area (Material Used)

The surface area of a closed cylinder is:
$$
A = 2\pi r^2 + 2\pi r h
$$
We want to minimize $A$ for a fixed $V$.


$$
A = 2\pi r^2 + 2\pi r (\frac{500}{\pi r^2})
$$


​				
​					

##  Step 4. Optimization

Differentiate $A$ with respect to $r$:


$$
\frac{dA}{dr} = 4\pi r - \frac{1000}{r^2}
$$

Set $\frac{dA}{dr} = 0$ to find the minimum:



$$
4\pi r = \frac{1000}{r^2}
$$


Then, 


$$
r=4.301\ \text{cm}
$$



$$
h = \frac {500}{4.301^2 \pi}=8.604\ \text{cm}
$$







 **Result:** For a cylinder with minimum surface area,
 the height should be **8.604 cm**, and the radius should be **4.301 cm** , which deviates from the actual dimensions (h=16.8cm, r=3.3cm). The actual can is much thinner and taller. 



![Screenshot 2025-10-25 at 7.54.02 PM](/assets/images/2025-10-18-optimization/Screenshot 2025-10-25 at 7.54.02 PM.png) <sub> optimal can

![image-20251025200052939](/assets/images/2025-10-18-optimization/image-20251025200052939.png)<sub> actual can

<sub> Source: [Matheretter – Cylinder Calculator 3D](https://www.matheretter.de/calc/cylinder)



##  Step 5. Conclusion

The real 500 mL can is far from the optimal, "ideal" dimensions.



Then let's think about why the real-world design does not use the “ideal” dimensions.



For me, I think it's because real-world design considers

- **Practicality:** Easier to hold and stack when tall.

- **Designs:** Simply looks better in thinner can than a fatter can.
