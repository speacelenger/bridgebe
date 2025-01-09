const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// ハンバーガーメニューの開閉
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// メニューリンククリックで閉じる
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});