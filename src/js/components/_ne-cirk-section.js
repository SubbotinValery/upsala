import anime from "../vendor/anime.min";

const girlWrapper = document.querySelector(".girl__wrapper");
const girlInner = document.querySelector(".girl__inner");
const girl = document.querySelector(".girl");

const neCirkTitleRegular = document.querySelectorAll(
  ".ne-cirk__title:not(.outline)"
);
const neCirkTitleOutline = document.querySelector(
  ".ne-cirk__title .italic .outline"
);

const neCirkTimeline = anime
  .timeline({ autoplay: false })
  .add(
    {
      targets: girlWrapper,
      top: ["60%", "50%"],
      right: ["30%", "50%"],
      duration: 400,
      easing: "linear",
    },
    0
  )
  .add(
    {
      targets: girl,
      scale: [1.5, 0.25],
      duration: 400,
      easing: "linear",
    },
    0
  )
  .add(
    {
      targets: neCirkTitleOutline,
      translateX: 700,
      duration: 400,
      easing: "linear",
    },
    "-=300"
  );

document.addEventListener("DOMContentLoaded", function () {
  console.log(neCirkTitleRegular);
  const neCirkGirlRotate = anime({
    targets: girlInner,
    rotate: [-30, 30],
    translateX: ["-5%", "5%"],
    translateY: ["10", "-10"],
    duration: 2000,
    loop: true,
    direction: "alternate",
    easing: "easeInOutQuad",
  });
  window.addEventListener("scroll", () => {
    neCirkTimeline.seek(window.pageYOffset);
  });
});
