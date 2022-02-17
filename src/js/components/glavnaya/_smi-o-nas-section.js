import anime from "../../vendor/anime.min";

const section = document.querySelector(".smi-o-nas-section");

const titleRegular = section.querySelector(".smi-o-nas__title");

const lineStar = section.querySelector(".smi-o-nas-star-line");

const yellowBgWrapper = section.querySelector(".yellow-bg__wrapper");
const yellowBg = section.querySelector(".yellow-bg");
const treeWrapper1 = section.querySelector(".tree__wrapper-1");
const treeWrapper2 = section.querySelector(".tree__wrapper-2");
const treeWrapper3 = section.querySelector(".tree__wrapper-3");
const treeWrapper4 = section.querySelector(".tree__wrapper-4");
const treeWrapper5 = section.querySelector(".tree__wrapper-5");
const treeWrapper6 = section.querySelector(".tree__wrapper-6");
const treeWrapper7 = section.querySelector(".tree__wrapper-7");

const treeWrapperAll = document.querySelectorAll(
  ".smi-o-nas-section > .tree__wrapper"
);

const smiONasTimeline = anime
  .timeline({ autoplay: false })
  .add(
    {
      targets: titleRegular,
      translateX: [0, "-100vw"],
      duration: 400,
      easing: "linear",
    },
    23100
  )
  .add(
    {
      targets: yellowBgWrapper,
      bottom: ["-30%", "27%"],
      left: ["0%", "0%"],
      right: ["0%", "0%"],
      width: "100%",
      translateY: ["50%", "50%"],
      duration: 300,
      easing: "linear",
    },
    23300
  )
  .add(
    {
      targets: treeWrapper1,
      translateY: ["50%", "50%"],
      translateX: ["-50%", "-50%"],
      bottom: ["-35%", "3%"],
      left: ["5%", "5%"],
      duration: 300,
      easing: "linear",
    },
    23300
  )
  .add(
    {
      targets: treeWrapper2,
      translateY: ["50%", "50%"],
      translateX: ["-50%", "-50%"],
      bottom: ["-35%", "-10%"],
      left: ["23%", "23%"],
      scale: [0.8, 0.8],
      duration: 300,
      easing: "linear",
    },
    23300
  )
  .add(
    {
      targets: treeWrapper3,
      translateY: ["50%", "50%"],
      translateX: ["-50%", "-50%"],
      bottom: ["-35%", "2%"],
      left: ["40%", "40%"],
      duration: 300,
      easing: "linear",
    },
    23300
  )
  .add(
    {
      targets: treeWrapper4,
      translateY: ["50%", "50%"],
      translateX: ["-50%", "-50%"],
      bottom: ["-35%", "-7%"],
      left: ["53%", "53%"],
      duration: 300,
      easing: "linear",
    },
    23300
  )
  .add(
    {
      targets: treeWrapper5,
      translateY: ["50%", "50%"],
      translateX: ["-50%", "-50%"],
      bottom: ["-35%", "13%"],
      left: ["67%", "67%"],
      scale: [0.95, 0.95],
      duration: 300,
      easing: "linear",
    },
    23300
  )
  .add(
    {
      targets: treeWrapper6,
      translateY: ["50%", "50%"],
      translateX: ["-50%", "-50%"],
      bottom: ["-35%", "-13%"],
      left: ["77%", "77%"],
      duration: 300,
      easing: "linear",
    },
    23300
  )
  .add(
    {
      targets: treeWrapper7,
      translateY: ["50%", "50%"],
      translateX: ["-50%", "-50%"],
      bottom: ["-35%", "1%"],
      left: ["90%", "90%"],
      scale: [1.1, 1.1],
      duration: 300,
      easing: "linear",
    },
    23300
  )
  .add(
    {
      targets: treeWrapperAll,
      bottom: "-35%",
      duration: 300,
      easing: "linear",
    },
    23700
  )
  .add(
    {
      targets: yellowBgWrapper,
      bottom: "-30%",
      duration: 300,
      easing: "linear",
    },
    23700
  );

document.addEventListener("DOMContentLoaded", function () {
  anime({
    targets: lineStar,
    loop: true,
    rotate: [0, 360],
    duration: 10000,
    autoplay: true,
    easing: "linear",
  });
  anime({
    targets: yellowBg,
    translateX: ["3%", "-3%"],
    duration: 4000,
    loop: true,
    direction: "alternate",
    easing: "linear",
  });
  window.addEventListener("scroll", () => {
    smiONasTimeline.seek(window.pageYOffset);
  });
});
