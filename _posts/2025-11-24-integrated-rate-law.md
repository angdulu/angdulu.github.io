---
layout: single
title: "Deriving the Integrated Rate Laws Formula & Graphs"
typora-root-url: ../
author_profile: false
mathjax: true
category: "science"
toc: true
---

Understanding integrated rate laws becomes simple once you see **where the formulas come from** and **why the graphs turn into straight lines**.
 Before deriving anything, let’s lock down the basics.



## 1. What Is Reaction Rate?

The **reaction rate** tells us how fast a reaction proceeds.





The universal definition is:


$$
\text{Rate} = \frac{\text{change in any measurable property}}{\text{time}}
$$



Rate can be measured using any property that changes over time (eg. mass, concentration, pH, etc)

 In concentration form, rate can be represented like this:


$$
\text{Rate} = -\frac{d[A]}{dt}
$$

## 2. What Is the Rate Law?

A **rate law** links the reaction rate to the concentration of reactants, and therefore can be represented like this:


$$
\text{Rate} = k[A]^m[B]^n
$$


------




- **A** and **B** are reactants
- [A] and [B] mean the **concentrations** of A and B 
- **k** = rate constant
- **m, n** = orders with respect to each reactant



## 3. What Does “Order” Mean?

Order tells us how strongly the concentration of a reactant affects the rate.

Examples:

- If doubling [A] doubles the rate → **1st order with respect to A**  ($k[A]$)

- If doubling [A] does nothing → **0 order with respect to A** ($k[A]^0=k$)

- If doubling [A] quadruples the rate → **2nd order with respect to A** ($k[A]^2$)

  

## 4. Why We Need Integrated Rate Laws

The differential form (rate = $\frac{d[A]}{dt}$) is about **instantaneous rate**.

The integrated rate law gives **a direct formula relating concentration and time**.

For example, using the formula, we can collect: 

- [A] after 10 s

- [A] after 50 s

- [A] after 200 s

  

## 5. Deriving the Integrated Rate Laws

We’ll derive each by:

1. Writing the differential rate law

2. Separating variables

3. Integrating from t=0  to t=t

4. Putting the result in **y = mx + b** form

5. Showing why the graphs become straight lines

   

### 🔵 Zero-Order Reaction

**Differential rate law**


$$
\text{Rate} = -\frac{d[A]}{dt} = k
$$



**Separate variables & integrate**


$$
\int_{[A]_0}^{[A]} d[A] = -k \int_0^{t} dt
$$



**Result**


$$
[A] -[A]_0= -kt
$$





**Graph form (straight line)**


$$
[A] = -kt + [A]_0
$$



- **y-axis:** [A]
- **x-axis:** t
- **slope:** −k

<img src="/assets/images/2025-11-24-integrated-rate-law/image-20251124121613255.png" alt="image-20251124121613255" style="zoom:50%;" />

### 🟢 First-Order Reaction

**Differential rate law**


$$
\text{Rate} = -\frac{d[A]}{dt} = k[A]
$$



**Separate variables & integrate**


$$
\int_{[A]_0}^{[A]} \frac{1}{[A]} d[A]
= -k \int_0^{t} dt
$$



**Result**



$$
\ln[A]- \ln[A]_0 = -kt 
$$

**Graph form**


$$
\ln[A] = -kt + \ln[A]_0
$$

- **y-axis:** ln[A]

- **x-axis:** t

- **slope:** −k

  <img src="/assets/images/2025-11-24-integrated-rate-law/image-20251124121636370.png" alt="image-20251124121636370" style="zoom:50%;" />

### 🔴 Second-Order Reaction

**Differential rate law**


$$
\text{Rate} = -\frac{d[A]}{dt} = k[A]^2
$$

**Separate variables**


$$
\int_{[A]_0}^{[A]} \frac{1}{[A]^2} d[A]
= k \int_0^{t} dt
$$

**Result**



$$
\frac{1}{[A]} - \frac{1}{[A]_0} = kt
$$

**Graph form**


$$
\frac{1}{[A]} = kt + \frac{1}{[A]_0}
$$

- **y-axis:** 1/[A]

- **x-axis:** t

- **slope:** +k

  <img src="/assets/images/2025-11-24-integrated-rate-law/image-20251124121708084.png" alt="image-20251124121708084" style="zoom:50%;" />

## 6. Why the Graphs Make Sense 

All integrated rate laws can be rewritten as:




$$
\text{(something involving [A])} = (\text{slope})\cdot t + (\text{intercept})
$$


This is simply:




$$
y = mx + b
$$


So when you plot the correct transformed variable, the graph must become a straight line.

That’s why:



- **[A] vs. t → straight line (zero order)**
- **ln[A] vs. t → straight line (first order)**
- **1/[A] vs. t → straight line (second order)**

![image-20251124121511022](/assets/images/2025-11-24-integrated-rate-law/image-20251124121511022.png)
