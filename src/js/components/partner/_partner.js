document.addEventListener("DOMContentLoaded", function () {
  let partnerSplide;
  let partnerPrev, partnerNext;

  const partnerSlider = document.querySelector("#partnerSlider");

  if (partnerSlider != null) {
    partnerPrev = document.querySelector("#partnerSlider .previous-button");
    partnerNext = document.querySelector("#partnerSlider .next-button");

    partnerSplide = new Splide("#partnerSlider .splide", {
      gap: "3rem",
      arrows: false,
      perPage: 1,
      type: "loop",
      pagination: true,
      keyboard: false,
      slideFocus: false,
    }).mount();

    partnerSplide.on("move", function () {
      var slides = document.querySelectorAll(
        "#partnerSlider .splide .splide__slide"
      );

      slides.forEach(function (slide) {
        slide.classList.add("is-visible");
      });
    });

    partnerPrev.addEventListener("click", function (e) {
      partnerSplide.go("<");
    });

    partnerNext.addEventListener("click", function (e) {
      partnerSplide.go(">");
    });
  }

  const header = document.querySelector(".header");
  const partnerSliderBlock = document.querySelector(".partner-slider__block");
  const contactBlock = document.querySelector(".contact__block__wrapper");
  const progressBlock = document.querySelector(".progress__block__wrapper");

  if (partnerSliderBlock != null) {
    const headerTimeline = anime
      .timeline({ autoplay: false })
      .add(
        {
          targets: header,
          backgroundColor: ["rgb(19, 19, 19, 0)", "rgb(19, 19, 19, 0.1)"],
          duration: 300,
        },
        window.pageYOffset +
          partnerSliderBlock.getBoundingClientRect().top -
          150
      )
      .add(
        {
          targets: header,
          backgroundColor: "rgb(19, 19, 19, 0)",
          duration: 300,
        },
        window.pageYOffset +
          partnerSliderBlock.getBoundingClientRect().bottom -
          50
      )
      .add(
        {
          targets: header,
          backgroundColor: ["rgb(19, 19, 19, 0)", "rgb(19, 19, 19, 0.1)"],
          duration: 300,
        },
        window.pageYOffset + contactBlock.getBoundingClientRect().top - 200
      )
      .add(
        {
          targets: header,
          backgroundColor: "rgb(19, 19, 19, 0)",
          duration: 300,
        },
        window.pageYOffset + progressBlock.getBoundingClientRect().bottom - 50
      );

    window.addEventListener("scroll", () => {
      headerTimeline.seek(window.pageYOffset);
    });
  }
});
