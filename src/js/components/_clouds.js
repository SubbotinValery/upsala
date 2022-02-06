import anime, { random } from "../vendor/anime.min";

const cloudItemAll = document.querySelectorAll(".cloud__item");

cloudItemAll.forEach((cloud) => {
  anime({
    targets: cloud,
    translateY: `${anime.random(3, 7)}%`,
    duration: anime.random(1000, 2000),
    loop: true,
    autoplay: true,
    direction: "alternate",
    easing: "easeInOutQuad",
  });
});
