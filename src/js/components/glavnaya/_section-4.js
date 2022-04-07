document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".section-4");

  if (section != null) {
    const url = document.URL;
    const anchor = url.split("#")[1];
    const anchoredBlock = document.getElementById(anchor);

    const preview = section.querySelectorAll(".preview__block .preview");
    const list = section.querySelectorAll(".nav__list .nav__link");

    for (let i = 0; i < list.length; i++) {
      list[i].addEventListener("mouseover", function () {
        preview[i].style.transform = "translate(-50%, -50%) rotate(360deg)";
        preview[i].style.width = "100%";
        preview[i].style.opacity = 1;
      });
      list[i].addEventListener("mouseout", function () {
        preview[i].style.transform = "translate(-50%, -50%) rotate(0deg)";
        preview[i].style.width = "0%";
        preview[i].style.opacity = 0;
      });
    }

    if (anchoredBlock != null) {
      window.scrollTo({
        top: anchoredBlock.offsetTop - 150,
        behavior: "smooth",
      });
    }
  }
});
