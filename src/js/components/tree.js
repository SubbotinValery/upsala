import anime from "../vendor/anime.min";

const treeItem = document.querySelectorAll(".tree__item");

anime({
  targets: treeItem,
  translateY: ["-2%", "2%"],
  duration: 4000,
  loop: true,
  autoplay: true,
  direction: "alternate",
  easing: "easeInOutQuad",
});
