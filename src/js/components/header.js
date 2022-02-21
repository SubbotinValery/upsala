const header = document.querySelector(".header");

if (header !== null) {
  const menuBtnAll = header.querySelectorAll(".menu__btn");

  menuBtnAll.forEach((menuBtn) => {
    menuBtn.addEventListener("click", function () {
      if (header.className.match(/\bis-open\b/)) {
        header.classList.remove("is-open");
      } else {
        header.classList.add("is-open");
      }
    });
  });
}
