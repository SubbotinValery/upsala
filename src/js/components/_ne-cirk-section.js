import anime from "../vendor/anime.min";

const girlWrapper = document.querySelector(".girl__wrapper");
const girlInner = document.querySelector(".girl__inner");
const girl = document.querySelector(".girl__wrapper .girl");

const handWrapper = document.querySelector(".hand__wrapper");

const neCirkTitleRegular = document.querySelectorAll(
  ".ne-cirk__title *:not(* > .outline)"
);
const neCirkTitleOutline = document.querySelector(
  ".ne-cirk__title * > .outline"
);

const neCirkTitleTimeline = anime
  .timeline({ autoplay: false, easing: "easeInOutQuad" })
  .add(
    {
      targets: neCirkTitleRegular,
      translateX: "-100%",
      duration: 600,
    },
    100
  )
  .add(
    {
      targets: neCirkTitleOutline,
      translateX: "900%",
      duration: 600,
    },
    100
  );

const neCirkTimeline = anime.timeline({ autoplay: false }).add({
  targets: girlWrapper,
  scale: [1.5, 0.6],
  top: ["-60%", "50%"],
  right: ["-30%", "-50%"],
  duration: 2000,
});

document.addEventListener("DOMContentLoaded", function () {
  console.log(neCirkTitleOutline);
  const neCirkGirlRotate = anime({
    targets: girlInner,
    rotate: [-30, 30],
    duration: 2000,
    loop: true,
    direction: "alternate",
    easing: "easeInOutQuad",
  });
  window.addEventListener("scroll", () => {
    neCirkTitleTimeline.seek(window.pageYOffset);
    neCirkTimeline.seek(window.pageYOffset);
  });
});
