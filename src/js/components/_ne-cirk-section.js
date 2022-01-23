import anime from "../vendor/anime.min";

const neCirkGirlWrapper = document.querySelector(".ne-cirk-girl__wrapper");
const neCirkGirl = document.querySelector(".ne-cirk-girl");
const neCirkGirlImg = document.querySelector(".ne-cirk-girl__img");

const neCirkHandWrapper = document.querySelector(".ne-cirk-hand__wrapper");

const clouds = document.querySelector(".clouds__wrapper");

const neCirkGirlRotate = anime({
  targets: neCirkGirl,
  rotate: [-15, 15],
  translateX: ["-3%", "3%"],
  duration: 1500,
  loop: true,
  direction: "alternate",
  easing: "easeInOutQuad",
});

const neCirkTimeline = anime
  .timeline({ autoplay: false })
  .add(
    {
      targets: neCirkGirlWrapper,
      top: ["65%", "50%"],
      right: ["30%", "50%"],
      duration: 300,
      autoplay: false,
      easing: "linear",
    },
    0
  )
  .add(
    {
      targets: neCirkGirlImg,
      scale: ["1.2", "0.23"],
      duration: 300,
      autoplay: false,
      easing: "linear",
    },
    0
  )
  .add(
    {
      targets: clouds,
      bottom: ["-50%", "0%"],
      duration: 300,
      autoplay: false,
      easing: "linear",
    },
    "-=200"
  )
  .add(
    {
      targets: neCirkHandWrapper,
      bottom: ["-50%", "25%"],
      duration: 300,
      autoplay: false,
      easing: "linear",
    },
    "-=200"
  )
  .add(
    {
      targets: neCirkGirlWrapper,
      top: ["50%", "150%"],
      duration: 100,
      autoplay: false,
      easing: "linear",
    },
    "+=400"
  )
  .add(
    {
      targets: neCirkHandWrapper,
      bottom: ["25%", "-50%"],
      duration: 100,
      autoplay: false,
      easing: "linear",
    },
    "-=100"
  );

window.addEventListener("scroll", () => {
  neCirkTimeline.seek(window.pageYOffset);
});
