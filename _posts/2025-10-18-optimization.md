---
layout: single
title: "Optimatization"
typora-root-url: ../
author_profile: false
mathjax: true
category: math
toc: false
---

When you pick up a 500 mL drink can, have you ever wondered—
 is its shape mathematically optimal for holding that volume with minimum material?

![16.9oz./ 500ml Standard | Crown](https://www.crowncork.com/sites/default/files/styles/can_large/public/2022-04/Standard-16.9oz.-211-Can-500ml-2x.jpg?itok=_t0dm8UP)

Let’s find out.
 (assume the can is a perfect cylinder, ignoring the weird curved top and bottom shape.)

## 🤓 Step 0. Background research

![Screenshot 2025-10-25 at 7.06.33 PM](/assets/images/2025-10-18-optimization/Screenshot 2025-10-25 at 7.06.33 PM.png)

<sub> source: trust me bro 😎

## 📦 Step 1. Known Information

- **Volume:** $V = 500\ \text{mL} = 500\ \text{cm}^3$
- **Typical Can Dimensions:**
   $h = 16.8\ \text{cm}$
   $r = 3.3\ \text{cm}$

## 📐 Step 2. Volume Formula

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

## ✏️ Step 3. Surface Area (Material Used)

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

## 🔍 Step 4. Optimization

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
r=4.301
$$



$$
h = \frac {500}{4.301^2 \pi}=8.604
$$


![Screenshot 2025-10-25 at 7.54.02 PM](/assets/images/2025-10-18-optimization/Screenshot 2025-10-25 at 7.54.02 PM.png) <sub> optimal can

![image-20251025200052939](/assets/images/2025-10-18-optimization/image-20251025200052939.png)<sub> actual can

Source: [Matheretter – Cylinder Calculator 3D](https://www.matheretter.de/calc/cylinder)



✅ **Result:** For a cylinder with minimum surface area,
 the **height should be 8.604 cm, and the radius should be 4.301 cm **, which deviates from the actual dimensions. The actual can is thinner and taller. 

## 🧠 Step 6. Conclusion

The real 500 mL can is far from the optimal, "ideal" dimensions.

So why not use the “ideal” dimensions? I think it's because real-world design considers

**Practicality:** Easier to hold and stack when tall.

**Designs:** Simply looks better in thinner can than a fatter can.
