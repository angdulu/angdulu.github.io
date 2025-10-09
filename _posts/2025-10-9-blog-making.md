---
layout: single
title: "Blog Making"
typora-root-url: ../
category: "coding"
toc: true
author_profile: false
---

## How I Made This GitHub Blog (With Zero Coding Experience)

This is my **first official post**, and it’s about how this website was born.

Before this, I had never written a single line of code in my life.
 HTML? YAML? Markdown? — I had no clue what any of those were.
 But I’ve always liked trying new things, even when I have no idea what I’m doing.
 So when I found a **YouTube video** explaining how to make a blog using **GitHub Pages + Jekyll**, I thought:

> “Why not?”

## 💡Day 1

The video I followed was in Korean, explaining how to make a Jekyll-based blog on GitHub Pages.
 The tutorial made it sound *so* easy — “less than 10 minutes!” — but for me, it took hours… days actually. 😅

Still, I learned a lot:

- How to create a GitHub repository

- What `_config.yml` does — basically, your site’s brain

- How to edit posts by making `.md` (Markdown) files

  

> This consists the website.

<img src="/assets/images/2025-10-9-blog-making/Screenshot 2025-10-09 at 4.56.29 PM.png" alt="Screenshot 2025-10-09 at 4.56.29 PM" style="zoom:50%;" /><img src="/assets/images/2025-10-9-blog-making/Screenshot 2025-10-09 at 4.57.14 PM.png" alt="Screenshot 2025-10-09 at 4.57.14 PM" style="zoom:50%;" />

> This is what's inside the `_config.yml`
>
> By changing, adding and removing codes, you can either change, add and remove features.

It's acutally very simple.

For example, simply changing this code:

```
name :   "Your name"
```

into this:

```
name :   "Andrew Kim"
```

![Screenshot 2025-10-09 at 5.14.04 PM](/assets/images/2025-10-9-blog-making/Screenshot 2025-10-09 at 5.14.04 PM.png)

It adds your name. While this is just a sample, you can add anything you want by simply asking ChatGPT! I even tried adding an automatic dark mode feature — it didn’t work as I expected, but still, here's the thing: you can do whatever you want.





------

Even though the template (I used Minimal Mistakes) was already made, understanding how it all connects was a challenge.
 But after so many Google searches, YouTube rewinds, and ChatGPT questions, it finally worked. 🎉



## 🧩 Day 2 — Leveling Up

As i'm posting this, I’ve already learned so much more:

- 🖥 **Using a local server** to instantly preview small edits before pushing to GitHub

- 🖼 **Adding images easily** with **Typora**, a Markdown editor that lets me drag and drop images

- 🎨 **Changing themes and settings**, adding new features, and customizing layouts

  > It started as a plain white page. Now it’s finally starting to look like a *real* blog.

- 🔍 **Using Inspect (Dev Tools)** to tweak colors, layouts, and other styles directly from my browser

Every little experiment makes this site feel more like mine.
 There’s still a lot I don’t understand — but that’s what makes it fun.



## ✍️ What’s Next

There’s so much I want to share, but writing everything in Markdown takes forever 😅

 Each post means creating and typing inside a `.md` file, so it’s not as quick as a regular blog.
 Still, I’ll keep posting the things I find interesting — step by step, as I learn.



**Adding automatic & manual dark mode**

I am currently working on adding automatic and manual dark mode feature. This is because I usually prefer dark mode, but I failed to make one that satisfies my expectations. As shown below, I usually rely 1000% on ChatGPT. You would know whether I have succeeded or not by the time you see my blog.

<sub> ⬇️ My GPT's response:

```
완전 좋아 👏 지금 찾은 코드가 바로 “자동 + 수동 다크모드 전환”의 정석 구조야.
정리하면 이렇게 동작해 👇

자동: 처음 접속 시 OS 테마 감지해서 라이트/다크 결정

수동: 네비게이션 바의 스위치 클릭 시 테마 즉시 변경

기억 기능: 사용자가 선택한 테마를 localStorage에 저장해, 다음 방문에도 그대로 유지

이걸 네 GitHub 블로그(angdulu.github.io)에 적용하는 순서를 차근차근 단계별로 알려줄게.

🪄 최종 목표

✅ 자동 다크모드 (OS 감지)
✅ 수동 스위치 (header에서 전환)
✅ 저장 기능 (페이지 새로고침해도 유지)

💡 전체 구조 요약
파일	역할
_includes/header.html (혹은 default.html)	스위치 버튼 HTML 추가
/assets/js/change-theme.js	테마 스위치 동작 로직
/assets/css/theme.scss	라이트/다크 색상 정의
🧩 1단계 — 스위치 HTML 추가

_includes/header.html (혹은 default.html의 nav-bar 부분)에 이 코드 추가:

<div class="collapse navbar-collapse" id="navbarResponsive">
  <ul class="navbar-nav ml-auto d-flex align-items-center">
    <!-- 기존 메뉴들 -->
    <li class="nav-item">
      <a class="nav-link" href="/">Home</a>
    </li>

    <!-- 테마 스위치 -->
    <li class="nav-item">
      <label class="theme-btn-wrap px-3" for="btn_change_theme">
        <input type="checkbox" id="btn_change_theme" />
        <i class="theme-btn"></i>
      </label>
    </li>
  </ul>
</div>

🎨 2단계 — CSS (assets/css/theme.scss)
/* 기본 아이콘 설정 */
.theme-btn-wrap .theme-btn {
  display: inline-block;
  width: 18px;
  height: 18px;
  background: url("/assets/images/moon.png") center/cover no-repeat;
  vertical-align: middle;
  transition: all 0.3s ease;
}

/* 체크박스 숨기기 */
.theme-btn-wrap input[type="checkbox"] {
  display: none;
}

/* 체크됐을 때 (다크모드 상태) 아이콘 변경 */
.theme-btn-wrap input[type="checkbox"]:checked + .theme-btn {
  background-image: url("/assets/images/sun.png");
}

/* 호버 애니메이션 */
.theme-btn-wrap .theme-btn:hover {
  transform: scale(1.2) rotate(180deg);
  transition: all 1s ease-in-out;
}

/* 실제 색상 변수 설정 */
:root[color-theme="light"] {
  --background: #ffffff;
  --font-color: #333333;
  --link-color: #0077cc;
}

:root[color-theme="dark"] {
  --background: #0d0d0e;
  --font-color: #d2d2d2;
  --link-color: #66aaff;
}

/* 변수 사용 */
body {
  background: var(--background);
  color: var(--font-color);
}

a {
  color: var(--link-color);
}

⚙️ 3단계 — JS 파일 (assets/js/change-theme.js)
// 테마 적용 함수
let setDarkTheme = (isDark) => {
  if (isDark) {
    document.documentElement.setAttribute("color-theme", "dark");
  } else {
    document.documentElement.setAttribute("color-theme", "light");
  }
  localStorage.setItem("theme", isDark ? "dark" : "default");
};

// 저장된 테마 불러오기
let currentTheme = localStorage.getItem("theme");
let isDark = false;

if (currentTheme) {
  isDark = currentTheme === "dark";
} else {
  // 처음 접속이면 OS 설정 감지
  isDark = matchMedia("(prefers-color-scheme: dark)").matches;
}

setDarkTheme(isDark);

// 스위치 상태 업데이트
let themeBtn = document.getElementById("btn_change_theme");
if (themeBtn) {
  themeBtn.checked = isDark;
  themeBtn.addEventListener("click", (e) => {
    setDarkTheme(e.target.checked);
  });
}

🧱 4단계 — JS 파일 연결 (_includes/footer.html or _layouts/default.html)

HTML 하단(</body> 바로 위)에 아래 코드 추가:

<script src="/assets/js/change-theme.js"></script>

✅ 5단계 — 아이콘 이미지 추가

/assets/images/ 폴더 안에

moon.png (라이트 모드 상태)

sun.png (다크 모드 상태)
두 파일을 넣어줘야 해.

🚀 6단계 — 커밋 & Push
git add .
git commit -m "Add auto+manual dark mode"
git push origin main


그다음 블로그 새로고침하면 스위치가 보이고, 클릭 시 라이트 ↔ 다크가 전환돼.
브라우저 새로고침해도 이전 선택이 유지될 거야.
```

This is just the beginning.
 Day 1, 2 of many. 🚀

## ⚙️ Tools That Saved Me

Honestly, I owe this blog to:

- 🧠 **Google** — for every “why isn’t my site showing up” question

- 🤖 **ChatGPT** — for fixing broken syntax and checking grammar (like this post 😏)

- 🎥 **YouTube** — for the Korean tutorial that started it all

  
  > 🎥 Video I learned from:  
  > [How to Make a GitHub Blog in 10 Minutes (Korean Tutorial)](https://youtu.be/ACzFIAOsfpM?si=7_akrniTkLNLwHLD) 
  > Credit to the creator for making it easy to follow

## 💬 What I Learned

- You don’t have to “know coding” to build something cool.

- Errors are part of the process — one typo can break everything, but fixing it teaches a lot.

- Building something yourself feels *way* better than just using a platform that’s already done for you.
