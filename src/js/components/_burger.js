const menu = document.querySelector(".header__nav");
const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", function () {
  if (menu.className.match(/\bclose\b/)) {
    menu.classList.remove("close");
    menu.classList.add("open");
  } else {
    menu.classList.add("close");
    menu.classList.remove("open");
  }
});
