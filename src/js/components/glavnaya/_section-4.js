document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".section-4");

  const preview = section.querySelectorAll(".preview__block .preview");
  const list = section.querySelectorAll(".nav__list .nav__item");

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

  const section6 = document.querySelector(".section-6").offsetTop;
  const section8 = document.querySelector(".section-8").offsetTop;
  const section9 = document.querySelector(".section-9").offsetTop;
  const section10 = document.querySelector(".section-10").offsetTop;
  const section11 = document.querySelector(".section-11").offsetTop;
  const section12 = document.querySelector(".section-12").offsetTop;

  list.forEach((element) => {
    const title = element.textContent.toLowerCase().split(" ").join("");
    console.log(title);
    switch (title) {
      // case "хулиганскийпроект":
      //   element.addEventListener("click", function () {
      //     window.scroll({ top: huliganskiiProektSection, behavior: "smooth" });
      //   });
      //   break;
      case "профтруппа":
        element.addEventListener("click", function () {
          window.scroll({ top: section6, behavior: "smooth" });
        });
        break;
      // case "инклюзивныйпроект":
      //   element.addEventListener("click", function () {
      //     window.scroll({ top: incluzivniiProektSection, behavior: "smooth" });
      //   });
      //   break;
      case "чтов результате?":
        element.addEventListener("click", function () {
          window.scroll({ top: section8, behavior: "smooth" });
        });
        break;
      case "культурныепродукты":
        element.addEventListener("click", function () {
          window.scroll({ top: section9, behavior: "smooth" });
        });
        break;
      case "смио нас":
        element.addEventListener("click", function () {
          window.scroll({ top: section10, behavior: "smooth" });
        });
        break;
      case "а чтопроисходитсейчас":
        element.addEventListener("click", function () {
          console.log(section11);
          window.scroll({ top: section11, behavior: "smooth" });
        });
        break;
      case "нашаистория":
        element.addEventListener("click", function () {
          window.scroll({ top: section12, behavior: "smooth" });
        });
        break;
      default:
        break;
    }
  });
});
