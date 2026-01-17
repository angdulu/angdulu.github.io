---
layout: single
title: "How I Run The Website Without Knowing How To Do Coding"
typora-root-url: ../
author_profile: false
mathjax: true
toc: 
---

A lot of people assume you need to know HTML, CSS, JavaScript, or even some backend language to run a personal website.
But honestly? I started mine knowing *none* of that. My entire blog began as an empty template — just a blank page staring back at me.

So how do I run a website without knowing how to code?

**I use ChatGPT.**

Whenever I want to add a feature, fix a layout issue, or change something visually, I do one thing: I describe my current setup, show the code I found online, and ask ChatGPT how to make it work on *my* site.

For example, when I wanted a dark-mode switch — with animation — I found someone’s code on Google. But because their code wasn't written to work in every indiviudual's site, if I just pasted it into my files, it would break things or create weird bugs.

So I copied the entire code into ChatGPT, explained what my blog currently looks like, and said what I wanted the feature to do. ChatGPT told me exactly which files to modify, even helping me create a new `theme.scss` file and rewrite the parts that didn’t fit.

![image-20251120140927691](/assets/images/2025-11-20-How_run_the_blog/image-20251120140927691.png)

<sub> I honestly don't know what all the codes really do. 😅



This is the same process for everything:

- Find code online

- Paste it into ChatGPT

- Explain my website’s current state

- Describe what I want to change

- Let the AI rewrite, combine, or debug the code so it works for my setup

  

Like I said, because the code often wasn’t built for my blog, it would sometimes cause errors, crash the layout, or break something else. So before pushing anything live, I always test locally. I run my local server, check if everything works correctly, fix small bugs with ChatGPT’s help, then finally push to origin.

![Screenshot 2025-11-20 at 2.08.19 PM](/assets/images/2025-11-20-How_run_the_blog/Screenshot 2025-11-20 at 2.08.19 PM.png)

<sub> local server testing

Step by step, feature by feature, the blog grew from absolutely nothing into a fully functional personal website.

And that’s the thing — with AI, nothing is really impossible. You don’t need to be a coding expert. You just need to be curious, willing to try things, and willing to ask good questions. AI won’t magically build everything for you, but it can absolutely help you turn “nothing” into “something”.

My blog is proof of that: built from scratch by someone who didn’t know how to code… but knew how to use AI.
