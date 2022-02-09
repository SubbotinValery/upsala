import anime from "../../vendor/anime.min";

const section = document.querySelector(".smi-o-nas-section");

const titleRegular = section.querySelector(".smi-o-nas__title");

const lineStar = section.querySelector(".smi-o-nas-star-line");

const smiONasTimeline = anime.timeline({ autoplay: false }).add(
  {
    targets: titleRegular,
    translateX: [0, "-100vw"],
    duration: 400,
    easing: "linear",
  },
  22400
);

document.addEventListener("DOMContentLoaded", function () {
  anime({
    targets: lineStar,
    loop: true,
    rotate: [0, 360],
    duration: 10000,
    autoplay: true,
    easing: "linear",
  });
  window.addEventListener("scroll", () => {
    smiONasTimeline.seek(window.pageYOffset);
  });
});
