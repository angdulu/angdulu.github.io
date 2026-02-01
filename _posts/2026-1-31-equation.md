---
layout: single
title: "Equation: Modeling Muscle Memory Recovery"
typora-root-url: ../
author_profile: false
mathjax: true
category: 
toc: 
---

This post documents **how a mathematical model for muscle memory recovery can be constructed**, rather than presenting final experimental results.

At this stage, my goal is not to prove a model, but to show how a reasonable physiological intuition can be translated into a quantitative equation.

## 1. From Observation to Hypothesis

Anyone who has returned to training after a break has likely noticed a consistent pattern:

- Strength returns **very quickly at first**
- Recovery slows down over time
- Gains become progressively harder as previous levels are approached

This is not only anecdotal. Many detraining–retraining studies describe recovery using phrases such as:

- “rapid initial recovery”
- “diminishing returns”
- “approach toward pre-detraining levels”

These observations naturally suggest the following hypothesis:

> **The rate of strength recovery is proportional to the remaining deficit from pre-detraining strength.**
>
> ###### recovery rate∝remaining deficit

In other words, the more strength that has yet to be recovered, the faster recovery occurs.

Let

- $S(t)$ be strength at time $t$ after retraining begins
- $S_T$ be strength at the end of the original training period
- $S_D$ be strength after the detraining period

Then the remaining deficit at time $t$ is:
$$
S_T - S(t)
$$
This leads to the proportionality assumption:
$$
\frac{dS}{dt} \propto \big(S_T - S(t)\big)
$$
This hypothesis is informed by common training experience and supported qualitatively by existing literature.
 A detailed review of specific studies will be included separately to keep the focus here on the modeling logic.

## 2. Translating the Hypothesis into a Differential Equation

Introducing a proportionality constant $k_r > 0$, the hypothesis becomes:
$$
\boxed{
\frac{dS}{dt} = k_r \big(S_T - S(t)\big)
}
$$
This equation captures several intuitive features of retraining:

- When the deficit is large, recovery is fast
- As strength approaches $S_T$, recovery slows
- Strength naturally approaches an upper bound rather than exceeding it

Importantly, **this equation is not chosen to force an exponential solution**.
 The exponential form emerges naturally from the hypothesis itself.

## 3. Solving the Equation 

This is a **First-Order Linear Differential Equation**. Specifically, it describes "Newton’s Law of Cooling" or "Mixing Problems," where a value $S$ approaches a target value $S_T$ over time.

(I had to self- taught basic linear differential equations because of this)



Let's find the function $S(t)$



**Step 1: Separate the Variables**

Our goal is to get all the $S$ terms on one side and all the $t$ terms on the other.

Given:

$$\frac{dS}{dt} = k_r(S_T - S)$$

Divide both sides by $(S_T - S)$ and multiply by $dt$:

$$\frac{1}{S_T - S} dS = k_r \, dt$$



**Step 2: Integrate Both Sides**

Now, we apply the integral to both sides:

$$\int \frac{1}{S_T - S} dS = \int k_r \, dt$$

- **Right Side:** This is easy. The integral of a constant $k_r$ with respect to $t$ is $k_r t + C$.
- **Left Side:** This requires a quick **u-substitution**.
  - Let $u = S_T - S$.
  - Then $du = -dS$, which means $dS = -du$.
  - The integral becomes $\int -\frac{1}{u} du = -\ln|u|$.

So, we have:

$$-\ln|S_T - S| = k_r t + C$$



**Step 3: Solve for $S$**

Now we just use algebra to isolate $S(t)$.

1. **Move the negative sign:**

   $$\ln|S_T - S| = -k_r t + C$$

   *(Note: Since $C$ is just an arbitrary constant, we don't need to write $-C$; we just keep it as $+C$.)*

2. **Exponentiate (e both sides):**

   $$|S_T - S| = e^{-k_r t + C}$$

   Using exponent rules ($e^{a+b} = e^a \cdot e^b$), we get:

   $$|S_T - S| = e^C \cdot e^{-k_r t}$$

3. **Simplify the Constant:**

   Since $e^C$ is just another constant, let's call it $A$.

   $$S_T - S = A e^{-k_r t}$$

4. **Final Isolation:**

   $$S(t) = S_T - A e^{-k_r t}$$

   

   Here,  $S_T$ is the **steady-state** (the value $S$ eventually reaches).

   $A$ is a constant determined by your **initial condition** (what $S$ was at $t=0$).

   The term $e^{-k_r t}$ shows that the difference between the current state and the target state **decays exponentially** over time.

   

5. **Here is how we "solve for the constant":**

- The Setup

We start with the general solution we just found:

$$S(t) = S_T - Ae^{-k_r t}$$

We are given the initial condition: **At $t = 0$, the value is $S_d$.** In math terms: $S(0) = S_d$.

- The Calculation

Plug $t = 0$ and $S = S_d$ into the equation:

1. **Substitute the values:**

   $$S_d = S_T - Ae^{-k_r(0)}$$

2. **Simplify the exponent:**

   Since any number (except zero) raised to the power of $0$ is $1$:

   $$e^0 = 1$$

   So, the equation becomes:

   $$S_d = S_T - A(1)$$

3. **Solve for $A$:**

   Add $A$ to both sides and subtract $S_d$ from both sides:

   $$A = S_T - S_d$$

## The Final Particular Solution

Now, substitute this expression for $A$ back into our general equation:

$$S(t) = S_T - (S_T - S_d)e^{-k_r t}$$

### Why this makes sense:

- **At $t = 0$:** The $e^0$ term becomes $1$, leaving you with $S_T - S_T + S_d$. Everything cancels out except $S_d$. It works!
- **As $t \to \infty$:** The term $e^{-k_r t}$ approaches $0$. This makes the entire right-hand part of the equation vanish, leaving you with $S(t) = S_T$. This confirms that $S_T$ is the "target" or equilibrium.

## 4. Why the Model Is Exponential

The equation
$$
\frac{dS}{dt} = k_r (S_T - S)
$$
is a first-order linear differential equation. Solving it with the initial condition


$$
S(0) = S_D
$$
(where $S_D$ is strength after detraining) yields:
$$
\boxed{
S(t) = S_T - (S_T - S_D)e^{-k_r t}
}
$$
This result is significant for several reasons:

- Exponential recovery is **not an arbitrary assumption**
- The solution naturally describes fast early recovery and diminishing gains
- The model guarantees a smooth approach toward $S_T$ without overshooting

Mathematically, muscle memory recovery is treated as a **first-order system approaching equilibrium**, a structure commonly seen in biological and physical processes.

------

## 4. Interpreting the Recovery Constant $k_r$

At this point, the only unknown in the model is the recovery constant $k_r$.

This parameter represents how quickly strength returns and is expected to vary based on factors such as:

- Training age and experience
- Length of detraining
- Type of strength measured (1RM vs machine-based strength)
- Degree of neural vs hypertrophic contribution

Estimating $k_r$ becomes a **data-driven problem**.
 Many studies report statements like:

> “Strength returned to pre-detraining levels within ~8 weeks.”

Such observations directly constrain the possible values of $k_r$ and allow parameter estimation through curve fitting.

My background in AP Calculus BC (differential equations) and rate-law modeling in chemistry has been especially useful at this stage, as the mathematical structure closely resembles exponential decay and recovery systems.

------

## 5. Why This Step Matters

This post does not claim that the model is complete or universally accurate.
 Instead, it documents a key transition:

> **intuition → hypothesis → differential equation → functional form**

This modeling process is foundational.
 Experimental validation and parameter estimation come later.

------

## What Comes Next

- Estimating $k_r$ from published detraining–retraining studies
- Comparing exponential and logistic recovery models
- Extending the model to include detraining decay ($k_d$)
