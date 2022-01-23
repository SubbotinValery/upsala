import anime from "../vendor/anime.min";

const star = document.querySelectorAll(".star");

const starAnimation = anime({
  targets: star,
  rotate: 360,
  duration: 10000,
  loop: true,
  autoplay: true,
  easing: "linear",
});
