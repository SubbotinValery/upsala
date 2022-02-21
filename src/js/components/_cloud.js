import anime from "../vendor/anime.min";

const cloudItemAll = document.querySelectorAll(".cloud__item");

cloudItemAll.forEach((cloud) => {
  anime({
    targets: cloud,
    translateY: `${anime.random(4, 7)}%`,
    duration: anime.random(1000, 1500),
    loop: true,
    autoplay: true,
    direction: "alternate",
    easing: "easeInOutQuad",
  });
});
