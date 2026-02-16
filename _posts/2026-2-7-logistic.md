---
layout: single
title: "Introducing a Logistic Strength Model"
typora-root-url: ../
author_profile: false
mathjax: true
category:"Research & Design" 
toc: 
---

## Introducing a Logistic Strength Model

Up to this point, recovery has been framed using exponential dynamics.
 However, strength restoration may follow constrained growth rather than pure exponential acceleration.

A logistic formulation is therefore introduced:
$$
\frac{dS}{dt} = k_\ell S \left(1 - \frac{S}{S_T}\right)
$$
where:

- $S(t)$ is strength at time $t$
- $S_T$ is the asymptotic retrained strength
- $k_\ell$ is the logistic growth constant

The closed-form solution is:
$$
S(t) = \frac{S_T}{1 + A e^{-k_\ell t}}
$$
with $A$ determined by initial conditions after detraining.

Unlike the exponential recovery model, the logistic structure allows:

- Early-stage inertia
- Mid-phase acceleration
- Saturation near the retraining plateau

This may better reflect biological adaptation constraints.

At this stage, the model is introduced as a structural alternative,
 not as a claim of superiority.
