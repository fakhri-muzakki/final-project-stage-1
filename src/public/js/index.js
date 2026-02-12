function toggleTheme() {
  const html = document.documentElement;

  // Toggle class dark
  html.classList.toggle("dark");

  // Simpan ke localStorage
  if (html.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // ❌ hentikan perubahan URL

    const targetId = this.getAttribute("href");
    const targetEl = document.querySelector(targetId);

    if (targetEl) {
      targetEl.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

lucide.createIcons();
