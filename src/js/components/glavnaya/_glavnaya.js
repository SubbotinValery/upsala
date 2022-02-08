import anime from "../../vendor/anime.min";

const glavnaya = document.querySelector(".glavnaya");

const starWrapper = glavnaya.querySelector(".star__wrapper");
// starWrapper.style.;

const glavnayaTimeline = anime.timeline({ autoplay: false }).add(
  {
    targets: starWrapper,
    display: "fixed",
    translateY: ["50%", "50%"],
    translateX: ["-50%", "-50%"],
    bottom: ["-50%", "60%"],
    left: ["25%", "25%"],
    scale: [0.5, 0.5],
    duration: 500,
    easing: "linear",
  },
  2500
);

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", () => {
    glavnayaTimeline.seek(window.pageYOffset);
  });
});
