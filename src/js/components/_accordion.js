const accordionContent = document.querySelectorAll(
  ".accordion .accordion__content"
);
const accordionBtn = document.querySelectorAll(".accordion .accordion__btn");

for (let i = 0; i < accordionContent.length; i++) {
  accordionBtn[i].addEventListener("click", function () {
    if (accordionContent[i].className.match(/\bclose\b/)) {
      accordionContent[i].classList.remove("close");
      accordionContent[i].classList.add("open");
    } else {
      accordionContent[i].classList.add("close");
      accordionContent[i].classList.remove("open");
    }
  });
}
