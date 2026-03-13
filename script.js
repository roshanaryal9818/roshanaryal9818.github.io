const html = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("siteNav");
const yearEl = document.getElementById("year");

// Footer year
yearEl.textContent = new Date().getFullYear();

// Theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  html.setAttribute("data-theme", savedTheme);
} else {
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  html.setAttribute("data-theme", systemDark ? "dark" : "light");
}

themeToggle?.addEventListener("click", () => {
  const current = html.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

// Mobile menu
menuBtn?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

// Close mobile menu on link click
document.querySelectorAll("#siteNav a").forEach((a) => {
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});
