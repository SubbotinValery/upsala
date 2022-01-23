import anime from "../vendor/anime.min";

const jumper1 = document.querySelector(".jumper-1 img");
const jumper2 = document.querySelector(".jumper-2 img");

anime
  .timeline({ autoplay: true, loop: true })
  .add({
    targets: jumper1,
    translateY: ["0%", "100%"],
    translateX: ["0%", "30%"],
    opacity: {
      value: [0, 1],
      duration: 100,
    },
    duration: 2000,
    easing: "linear",
  })
  .add({
    targets: jumper1,
    opacity: 0,
    duration: 100,
    easing: "linear",
  });

anime({
  targets: jumper2,
  translateY: ["-2%", "2%"],
  translateX: ["2%", "-2%"],
  duration: 1000,
  loop: true,
  direction: "alternate",
  easing: "linear",
});
