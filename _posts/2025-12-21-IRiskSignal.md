---
layout: single
title: "Designing an Inhalation Risk Signal System"
typora-root-url: ../
author_profile: false
mathjax: true
category: "Health & Medicine"
toc: true
---

# From an Idea to a Working Prototype: Designing an Inhalation Risk Signal System

I have long been interested in chemistry, especially where it intersects with real-world problems.
 But this project did not begin as a technical experiment. It began with personal experience.

Years ago, I was affected by the Korean humidifier disinfectant disaster. After exposure, I suffered from mulitple respiratory illnesses including bronchitis and repeated pneumonia, revealing long-term health risks that were not recognized at the time. Humidifier disinfectants are chemicals added to humidifier water and dispersed directly into the air for inhalation. In South Korea, these products were sold with government safety certification, leading consumers to trust they were harmless. In reality, prolonged inhalation caused severe respiratory diseases such as pulmonary fibrosis, asthma, and lung cancer.

The disaster resulted in at least 1,740 deaths and over 5,900 injuries nationwide, ultimately leading to a total sales ban, manufacturer accountability, and widespread public outrage. That experience fundamentally changed how I think about everyday chemicals and what the word *“safe”* truly means.

This project is my attempt to answer a simple but uncomfortable question:
What if many everyday products are not fully understood for how we actually use them? What if the products turned out to be a carcinogen, a Cancer-causing agent? 

## Defining the Problem

At first, the idea seemed straightforward:
scan a product, AI would analyze its ingredients, and assess health risk.



But almost immediately, I ran into a problem. The core problem was that AI often times make up their own data, sources, and even has its fake information. If these problems occur when evaluating whether the product is safe or not, it can lead to serious consequences. 

 How to prevent it from inventing conclusions that exceed available evidence was the core problem I need to solve. 

So In this system, I tried to constrained the AI usage to:

- interpret ingredient information,

- map chemicals to predefined mechanistic risk patterns,

- and evaluate exposure conditions using fixed, transparent criteria.

  

Also, most existing systems already try to *predict* harm.
They label things as “safe” or “dangerous,” often without explaining *why*, and these labels collapse complex chemical behavior, exposure pathways, and evidential uncertainty into a false yes-or-no answer.

I realized that this approach was exactly what failed in the humidifier disinfectant case: a safetly-approved product that turned out to be deadly. 

Therefore, the system produces **structured risk signals** along a graded scale (1–X), backed up with mechanism-based, exposure-weighted summaries, and the evidence confidence level. 







This design ensures that AI does not “fill in the gaps” when data is missing.
When evidence is insufficient, uncertainty is reported as uncertainty, not silently converted into reassurance.

In short, the goal is not to remove AI judgment, but to **bind it to rules, sources, and explainable criteria**, preventing overconfident or fabricated conclusions



# First Attempt

My first attempts focused on ingredient-based analysis:

- If a product contained a known chemical, flag it
- If it didn’t, assume lower concern

This quickly fell apart.

There are thousands of chemical names, aliases, and formulations.
Worse, unknown or poorly studied chemicals would appear “safe” simply because they were not recognized.

This was the same structural blind spot that allowed PHMG-P to remain unchallenged for years.

I realized the system needed to think differently.

## Shifting from Ingredients to Mechanisms

The key breakthrough came when I stopped asking *“What chemical is this?”*
and started asking *“How does this chemical behave?”*

Instead of classifying **ingredients**, the system classifies **mechanisms**:

- Cationic membrane disruption
- Volatile organic compound inhalation
- Secondary pollutant formation in indoor air
- Chronic low-dose repeated exposure
- Insufficient inhalation data

This pattern-based approach allows:

- Rare or misspelled ingredients to still be interpreted
- Multiple risk mechanisms to apply to a single product
- Uncertainty itself to be treated as a meaningful signal

Importantly, **absence of evidence is never presented as safety**.

## Building the Prototype

With the logic defined, I built a simple web-based prototype:

- Ingredient input (comma-separated)
- Product form (spray, wipe, gel)
- Exposure context (indoor, frequency)

The system then:

1. Maps ingredients to inhalation risk patterns
2. Applies exposure modifiers
3. Generates an **Inhalation Risk Signal** (Low / Moderate / High)
4. Displays:
   - Key reasons
   - Evidence confidence
   - What we know
   - What we don’t know

![Screenshot 2026-01-06 at 11.24.04 AM](/assets/images/2025-12-21/Screenshot 2026-01-06 at 11.24.04 AM.png)

## Prototype 1 & What Didn’t Work

After testing the prototype, several weaknesses became obvious:

- Users had to manually type ingredient names
- Typos caused breakdowns
- The UI felt more like a research dashboard than an app
- It didn’t yet feel “intelligent” from a user’s perspective

They showed that:

- The **engine logic was sound**
- The **input layer needed redesign**
- AI should assist input correction and interpretation

This realization directly shaped the next phase of development.

![Screenshot 2026-01-06 at 11.10.10 AM](/assets/images/2025-12-21/Screenshot 2026-01-06 at 11.10.10 AM.png)

<sub> needed mannual typing

![Screenshot 2026-01-06 at 11.11.53 AM](/assets/images/2025-12-21/Screenshot 2026-01-06 at 11.11.53 AM.png)

<sub> typo led the system fail to recognize the ingredient 

## Where This Is Going Next

The next iteration focuses on input intelligence:

- Ingredient name correction and alias matching

- AI-assisted classification transparency 

- Reduced UI complexity for mobile use

- Eventually, OCR-based ingredient extraction from labels

  
