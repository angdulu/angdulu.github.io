/* 1) theme apply + persist */
const setDarkTheme = (isDark) => {
  document.documentElement.setAttribute("color-theme", isDark ? "dark" : "light");
  localStorage.setItem("theme", isDark ? "dark" : "default");
};

/* 2) decide initial theme (saved -> OS) */
const saved = localStorage.getItem("theme");
let isDark = saved ? saved === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
setDarkTheme(isDark);

/* 3) inject toggle into Minimal Mistakes masthead */
document.addEventListener("DOMContentLoaded", () => {
  // Minimal Mistakes nav list: .greedy-nav > ul.visible-links
  const navList = document.querySelector(".greedy-nav .visible-links");
  if (!navList) return;

  const li = document.createElement("li");
  li.className = "nav-item";
  li.innerHTML = `
    <label class="theme-btn-wrap px-3" for="btn_change_theme">
      <input type="checkbox" id="btn_change_theme" ${isDark ? "checked" : ""}/>
      <i class="theme-btn"></i>
    </label>
  `;
  navList.appendChild(li);

  const toggle = li.querySelector("#btn_change_theme");
  toggle.addEventListener("change", (e) => setDarkTheme(e.target.checked));
});
