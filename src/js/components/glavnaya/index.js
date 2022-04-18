import "./_section-1";
import "./_section-2";
import "./_section-3";
import "./_section-4";
import "./_section-5";
import "./_section-6";
import "./_section-7";
import "./_section-8";
import "./_section-9";
import "./_section-10";
import "./_section-11";
import "./_section-12";

document.addEventListener("DOMContentLoaded", function () {
  const indexPage = document.getElementById("indexPage");
  const header = document.querySelector(".header");
  const section8Slider = document.querySelector(".section-8 .slider__wrapper");
  const section9Slider = document.querySelector(".section-9 .slider__wrapper");
  const section12 = document.querySelector(".section-12");

  if (indexPage != null) {
    const headerTimeline = anime
      .timeline({ autoplay: false })
      .add(
        {
          targets: header,
          backgroundColor: ["rgb(19, 19, 19, 0)", "rgb(19, 19, 19, 0.25)"],
          duration: 300,
        },
        window.pageYOffset + section8Slider.getBoundingClientRect().top - 150
      )
      .add(
        {
          targets: header,
          backgroundColor: "rgb(19, 19, 19, 0)",
          duration: 300,
        },
        window.pageYOffset + section8Slider.getBoundingClientRect().bottom - 50
      )
      .add(
        {
          targets: header,
          backgroundColor: "rgb(19, 19, 19, 0.25)",
          duration: 300,
        },
        window.pageYOffset + section9Slider.getBoundingClientRect().top - 150
      )
      .add(
        {
          targets: header,
          backgroundColor: "rgb(19, 19, 19, 0)",
          duration: 300,
        },
        window.pageYOffset + section9Slider.getBoundingClientRect().bottom - 50
      )
      .add(
        {
          targets: header,
          backgroundColor: "rgb(19, 19, 19, 0.25)",
          duration: 300,
        },
        window.pageYOffset + section12.getBoundingClientRect().top - 150
      )
      .add(
        {
          targets: header,
          backgroundColor: "rgb(19, 19, 19, 0)",
          duration: 300,
        },
        window.pageYOffset + section12.getBoundingClientRect().bottom - 50
      );

    window.addEventListener("scroll", () => {
      headerTimeline.seek(window.pageYOffset);
    });
  }
});
