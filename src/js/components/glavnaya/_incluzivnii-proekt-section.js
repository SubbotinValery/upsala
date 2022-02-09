import anime from "../../vendor/anime.min";

const section = document.querySelector(".incluzivnii-proekt-section");

const mountainWrapper = section.querySelector(".mountain__wrapper");
const boyOnBallWrapper = section.querySelector(".boy-on-ball__wrapper");
const boyOnBall = section.querySelector(".boy-on-ball");
const giraffeWrapper = section.querySelector(".giraffe__wrapper");
const giraffe = section.querySelector(".giraffe");
const panelkaBlockWrapper = section.querySelector(".panelka-block__wrapper");
const panelkaBackWrapper = section.querySelector(".panelka-back__wrapper");
const girlOnHoduliWrapper = section.querySelector(".girl-on-hoduli__wrapper");
const girlOnHoduli = section.querySelector(".girl-on-hoduli");
const yellowBgWrapper = section.querySelector(".yellow-bg__wrapper");
const yellowBg = section.querySelector(".yellow-bg");
const cloudWrapper = section.querySelector(".cloud__wrapper");

const animations = [
  mountainWrapper,
  boyOnBallWrapper,
  giraffeWrapper,
  panelkaBlockWrapper,
  panelkaBackWrapper,
  girlOnHoduliWrapper,
  yellowBgWrapper,
  cloudWrapper,
];

const content1 = section.querySelector(".incluzivnii-proekt-content-1");
const content2 = section.querySelector(".incluzivnii-proekt-content-2");
const content3 = section.querySelector(".incluzivnii-proekt-content-3");

const titleRegular = document.querySelector(
  ".incluzivnii-proekt-title > *:not(.italic)"
);
const titleOutline = document.querySelector(
  ".incluzivnii-proekt-title  > .italic"
);

const incluzivniiProektTimeline = anime
  .timeline({ autoplay: false })
  .add(
    {
      targets: content1,
      opacity: [0, 1],
      translateX: ["100%", "0%"],
      duration: 200,
      easing: "linear",
    },
    15100
  )
  .add(
    {
      targets: titleRegular,
      translateX: [0, "-100vw"],
      duration: 400,
      easing: "linear",
    },
    15100
  )
  .add(
    {
      targets: titleOutline,
      translateX: [0, "100vw"],
      duration: 400,
      easing: "linear",
    },
    15100
  )
  .add(
    {
      targets: mountainWrapper,
      bottom: ["-100%", "20%"],
      left: ["50%", "50%"],
      translateX: ["-50%", "-50%"],
      translateY: ["50%", "50%"],
      opacity: [0, 1],
      duration: 500,
      easing: "linear",
    },
    15200
  )
  .add(
    {
      targets: cloudWrapper,
      bottom: ["15%", "15%"],
      left: ["-50%", "20%"],
      scale: [0.7, 0.7],
      duration: 1000,
      easing: "linear",
    },
    15800
  )
  .add(
    {
      targets: boyOnBallWrapper,
      bottom: ["40%", "60%"],
      left: ["-30%", "25%"],
      translateX: ["-50%", "-50%"],
      translateY: ["50%", "50%"],
      rotate: [-30, 0],
      scale: [0, 0.4],
      duration: 500,
      easing: "linear",
    },
    15800
  )
  .add(
    {
      targets: giraffeWrapper,
      bottom: ["40%", "30%"],
      left: ["-30%", "30%"],
      translateX: ["-50%", "-50%"],
      translateY: ["50%", "50%"],
      scale: [0, 0.3],
      duration: 500,
      easing: "linear",
    },
    15800
  )
  .add(
    {
      targets: mountainWrapper,
      bottom: "35%",
      left: "70%",
      scale: 0.6,
      duration: 500,
      easing: "linear",
    },
    15900
  )
  .add(
    {
      targets: mountainWrapper,
      bottom: "40%",
      left: "60%",
      scale: 0.55,
      duration: 500,
      easing: "linear",
    },
    16400
  )
  .add(
    {
      targets: yellowBgWrapper,
      bottom: ["-30%", "35%"],
      right: ["43%", "43%"],
      translateY: ["50%", "50%"],
      translateX: ["50%", "50%"],
      scale: [0.5, 0.5],
      duration: 300,
      easing: "linear",
    },
    16200
  )
  .add(
    {
      targets: panelkaBackWrapper,
      bottom: ["-20%", "25%"],
      right: ["30%", "30%"],
      translateX: ["50%", "50%"],
      translateY: ["50%", "50%"],
      scale: [0.5, 0.5],
      duration: 300,
      easing: "linear",
    },
    16200
  )
  .add(
    {
      targets: panelkaBlockWrapper,
      bottom: ["-25%", "20%"],
      right: ["35%", "35%"],
      translateX: ["50%", "50%"],
      translateY: ["50%", "50%"],
      scale: [0.5, 0.5],
      duration: 300,
      easing: "linear",
    },
    16250
  )
  .add(
    {
      targets: panelkaBlockWrapper,
      bottom: ["-25%", "20%"],
      right: ["35%", "35%"],
      translateX: ["50%", "50%"],
      translateY: ["50%", "50%"],
      scale: [0.5, 0.5],
      duration: 300,
      easing: "linear",
    },
    16250
  )
  .add(
    {
      targets: content2,
      opacity: [0, 1],
      translateX: ["100%", "0%"],
      duration: 200,
      easing: "linear",
    },
    16700
  )
  .add(
    {
      targets: content3,
      opacity: [0, 1],
      translateX: ["100%", "0%"],
      duration: 200,
      easing: "linear",
    },
    17300
  )
  .add(
    {
      targets: girlOnHoduliWrapper,
      bottom: ["40%", "40%"],
      right: ["-10%", "40%"],
      translateX: ["50%", "50%"],
      translateY: ["50%", "50%"],
      duration: 500,
      easing: "linear",
    },
    17500
  )
  .add(
    {
      targets: animations,
      opacity: 0,
      duration: 100,
      easing: "linear",
    },
    18100
  )
  .add(
    {
      targets: animations,
      translateY: "200%",
      duration: 1,
      easing: "linear",
    },
    18300
  );

document.addEventListener("DOMContentLoaded", function () {
  anime({
    targets: boyOnBall,
    rotate: [-5, 20],
    duration: 1500,
    loop: true,
    direction: "alternate",
    easing: "easeInOutQuad",
  });
  anime({
    targets: giraffe,
    rotate: [-10, 20],
    translateX: ["20%", "-10%"],
    duration: 1500,
    loop: true,
    direction: "alternate",
    easing: "easeInOutQuad",
  });
  anime({
    targets: girlOnHoduli,
    rotate: [-10, 10],
    // translateX: ["20%", "-20%"],
    duration: 1500,
    loop: true,
    direction: "alternate",
    easing: "easeInOutQuad",
  });
  anime({
    targets: yellowBg,
    translateY: ["5%", "-5%"],
    duration: 2000,
    loop: true,
    direction: "alternate",
    easing: "easeInOutQuad",
  });
  window.addEventListener("scroll", () => {
    incluzivniiProektTimeline.seek(window.pageYOffset);
  });
});
