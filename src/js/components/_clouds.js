import anime from "../vendor/anime.min";

const cloudItem = document.querySelectorAll(".cloud__item");

anime({
  targets: cloudItem,
  translateY: ["-4%", "4%"],
  duration: 1500,
  loop: true,
  autoplay: true,
  direction: "alternate",
  easing: "easeInOutQuad",
});
