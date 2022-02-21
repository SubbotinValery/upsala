import anime from "../vendor/anime.min";

const treeItemAll = document.querySelectorAll(".tree__item");

treeItemAll.forEach((tree) => {
  anime({
    targets: tree,
    translateX: `${anime.random(3, 7)}%`,
    duration: anime.random(1500, 2500),
    loop: true,
    autoplay: true,
    direction: "alternate",
    easing: "easeInOutQuad",
  });
});
