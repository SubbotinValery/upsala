const headerSide = document.querySelector(".header__side");
const burgerBtn = document.querySelector(".header__side ~ .primary-btn");

burgerBtn.addEventListener("click", function () {
  if (headerSide.className.match(/\bclose\b/)) {
    headerSide.classList.remove("close");
    headerSide.classList.add("open");
  } else {
    headerSide.classList.add("close");
    headerSide.classList.remove("open");
  }
});
