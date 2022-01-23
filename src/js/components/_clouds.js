import anime from "../vendor/anime.min";

const cloudItems = document.querySelectorAll(".clouds__item");

anime({
  targets: cloudItems,
  translateY: [-10, 10],
  duration: 1000,
  loop: true,
  autoplay: true,
  direction: "alternate",
  easing: "easeInOutQuad",
});
