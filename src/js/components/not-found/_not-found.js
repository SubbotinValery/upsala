import anime from "../../vendor/anime.min";

const jugglerWrapper = document.querySelector(".not-found-section .juggler");

const uSymbol = document.querySelector(".not-found-section .ups-text-u");
const pSymbol = document.querySelector(".not-found-section .ups-text-p");
const sSymbol = document.querySelector(".not-found-section .ups-text-s");
const exclamationSymbol = document.querySelector(
  ".not-found-section .ups-text-exclamation"
);

document.addEventListener("DOMContentLoaded", function () {
  const jugglerAnimation = anime
    .timeline({
      targets: jugglerWrapper,
      delay: 400,
      duration: 1,
      loop: true,
      autoplay: true,
      easing: "linear",
    })
    .add({
      scaleX: -1,
    })
    .add({
      scaleX: 1,
    });
});
