import anime from "../../vendor/anime.min";

const section = document.querySelector(".huliganskii-proekt-section");

const unicycleWrapper = section.querySelector(".unicycle__wrapper");
const unicycleInner = section.querySelector(".unicycle__inner");
const unicycle = section.querySelector(".unicycle");

const unicycleProfileGirlWrapper = section.querySelector(
  ".unicycle-profile-girl__wrapper"
);
const unicycleProfileBoyWrapper = section.querySelector(
  ".unicycle-profile-boy__wrapper"
);

const panelkaWrapperLeft = section.querySelector(".panelka__wrapper-left");
const panelkaWrapperRight = section.querySelector(".panelka__wrapper-right");

const ropeWrapper = section.querySelector(".rope__wrapper");
const elephantWrapper = section.querySelector(".elephant__wrapper");
const childrensWrapper = section.querySelector(".childrens__wrapper");
const yellowBgWrapper = section.querySelector(".yellow-bg__wrapper");
const yellowBg = section.querySelector(".yellow-bg");

const cloudWrapper1 = section.querySelector(".cloud__wrapper-1");
const cloudWrapper2 = section.querySelector(".cloud__wrapper-2");
const cloudWrapper3 = section.querySelector(".cloud__wrapper-3");

const titleRegular = document.querySelector(
  ".huliganskii-proekt__title > *:not(.italic)"
);
const titleOutline = document.querySelector(
  ".huliganskii-proekt__title  > .italic"
);

const neCirkTimeline = anime
  .timeline({ autoplay: false })
  .add(
    {
      targets: unicycleWrapper,
      bottom: ["-150%", "60%"],
      left: ["25%", "25%"],
      translateX: ["-50%", "-50%"],
      translateY: ["50%", "50%"],
      scale: [0.2, 0.2],
      duration: 500,
      easing: "linear",
    },
    7500
  )
  .add(
    {
      targets: titleRegular,
      translateX: [0, "-100vw"],
      duration: 400,
      easing: "linear",
    },
    7600
  )
  .add(
    {
      targets: titleOutline,
      translateX: [0, "100vw"],
      duration: 400,
      easing: "linear",
    },
    7600
  )
  .add(
    {
      targets: unicycleWrapper,
      translateX: "-100%",
      duration: 400,
      easing: "linear",
    },
    8300
  )
  .add(
    {
      targets: panelkaWrapperLeft,
      bottom: ["-65%", "20%"],
      left: ["12%", "12%"],
      translateY: ["50%", "50%"],
      translateX: ["-50%", "-50%"],
      scale: [0.6, 0.6],
      duration: 500,
      easing: "linear",
    },
    8500
  )
  .add(
    {
      targets: panelkaWrapperRight,
      bottom: ["-60%", "20%"],
      right: ["15%", "15%"],
      translateY: ["50%", "50%"],
      translateX: ["50%", "50%"],
      scale: [0.6, 0.6],
      duration: 500,
      easing: "linear",
    },
    8500
  )
  .add(
    {
      targets: unicycleProfileGirlWrapper,
      bottom: ["-20%", "69%"],
      left: ["16%", "16%"],
      translateY: ["50%", "50%"],
      translateX: ["-50%", "-50%"],
      scale: [0.5, 0.5],
      rotate: [-10, -10],
      duration: 500,
      easing: "linear",
    },
    8500
  )
  .add(
    {
      targets: unicycleProfileBoyWrapper,
      bottom: ["-20%", "63.5%"],
      left: ["24%", "24%"],
      translateY: ["50%", "50%"],
      translateX: ["-50%", "-50%"],
      scale: [0.5, 0.5],
      rotate: [-10, -10],
      duration: 500,
      easing: "linear",
    },
    8500
  )
  .add(
    {
      targets: elephantWrapper,
      bottom: ["-20%", "59%"],
      right: ["15%", "15%"],
      translateY: ["50%", "50%"],
      translateX: ["50%", "50%"],
      scale: [0.5, 0.5],
      duration: 500,
      easing: "linear",
    },
    8500
  )
  .add(
    {
      targets: yellowBgWrapper,
      bottom: ["-30%", "15%"],
      left: ["0%", "0%"],
      right: ["0%", "0%"],
      width: "100%",
      translateY: ["50%", "50%"],
      duration: 500,
      easing: "linear",
    },
    8500
  )
  .add(
    {
      targets: childrensWrapper,
      bottom: ["-30%", "18%"],
      left: ["50%", "50%"],
      translateX: ["-50%", "-50%"],
      translateY: ["50%", "50%"],
      scale: [0.5, 0.5],
      duration: 500,
      easing: "linear",
    },
    8500
  )
  .add(
    {
      targets: ropeWrapper,
      opacity: [0, 1],
      duration: 200,
      easing: "linear",
    },
    9100
  )
  .add(
    {
      targets: unicycleProfileBoyWrapper,
      bottom: {
        value: "63%",
        duration: 100,
      },
      left: {
        value: "68%",
        duration: 900,
      },
      easing: "linear",
    },
    9300
  )
  .add(
    {
      targets: unicycleProfileBoyWrapper,
      left: "79%",
      bottom: "71%",
      duration: 300,
      easing: "linear",
    },
    10300
  )
  .add(
    {
      targets: unicycleProfileBoyWrapper,
      left: "110%",
      bottom: "45%",
      duration: 500,
      easing: "linear",
    },
    10600
  )
  .add(
    {
      targets: unicycleProfileGirlWrapper,
      bottom: {
        value: "63%",
        duration: 100,
      },
      left: {
        value: "60.5%",
        duration: 900,
      },

      easing: "linear",
    },
    9300
  )
  .add(
    {
      targets: unicycleProfileGirlWrapper,
      left: "67%",
      duration: 100,
      easing: "linear",
    },
    10300
  )
  .add(
    {
      targets: unicycleProfileGirlWrapper,
      left: "79%",
      bottom: "71%",
      duration: 200,
      easing: "linear",
    },
    10500
  )
  .add(
    {
      targets: unicycleProfileGirlWrapper,
      left: "110%",
      bottom: "47%",
      duration: 500,
      easing: "linear",
    },
    10750
  )
  .add(
    {
      targets: elephantWrapper,
      bottom: "71%",
      right: "19%",
      easing: "linear",
      duration: 100,
    },
    10600
  )
  .add(
    {
      targets: elephantWrapper,
      bottom: "45%",
      right: "-20%",
      easing: "linear",
      duration: 500,
    },
    10750
  )
  .add(
    {
      targets: ropeWrapper,
      opacity: 0,
      duration: 200,
      easing: "linear",
    },
    10400
  )
  .add(
    {
      targets: childrensWrapper,
      bottom: "-30%",
      duration: 500,
      easing: "linear",
    },
    11000
  )
  .add(
    {
      targets: panelkaWrapperRight,
      bottom: "-60%",
      duration: 500,
      easing: "linear",
    },
    11300
  )
  .add(
    {
      targets: panelkaWrapperLeft,
      bottom: "-65%",
      duration: 500,
      easing: "linear",
    },
    11500
  )
  .add(
    {
      targets: yellowBgWrapper,
      bottom: "-30%",
      duration: 500,
      easing: "linear",
    },
    11500
  )
  .add(
    {
      targets: yellowBgWrapper,
      bottom: "-30%",
      duration: 500,
      easing: "linear",
    },
    11500
  );

document.addEventListener("DOMContentLoaded", function () {
  anime({
    targets: unicycle,
    translateX: ["20%", "-15%"],
    translateY: ["3%", "3%"],
    duration: 4000,
    loop: true,
    direction: "alternate",
    easing: "easeInOutQuad",
  });
  anime({
    targets: unicycleInner,
    rotate: [-5, 10],
    translateX: ["-3%", "3%"],
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
    neCirkTimeline.seek(window.pageYOffset);
  });
});
