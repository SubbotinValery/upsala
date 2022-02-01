import anime from "../../vendor/anime.min";

const unicycleWrapper = document.querySelector(".unicycle__wrapper");
const unicycleInner = document.querySelector(".unicycle__inner");
const unicycle = document.querySelector(".unicycle");

const unicycleProfileGirlWrapper = document.querySelector(
  ".unicycle-profile-girl__wrapper"
);
const unicycleProfileBoyWrapper = document.querySelector(
  ".unicycle-profile-boy__wrapper"
);

const panelkaWrapperLeft = document.querySelector(".panelka__wrapper-left");
const panelkaWrapperRight = document.querySelector(".panelka__wrapper-right");

const ropeWrapper = document.querySelector(".rope__wrapper");
const elephantWrapper = document.querySelector(".elephant__wrapper");
const childrensWrapper = document.querySelector(".childrens__wrapper");

const treeWrapper = document.querySelector(".tree__wrapper");
const yellowBgWrapper = document.querySelector(".yellow-bg__wrapper");

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
    7800
  )
  .add(
    {
      targets: titleOutline,
      translateX: [0, "100vw"],
      duration: 400,
      easing: "linear",
    },
    7800
  )
  .add(
    {
      targets: treeWrapper,
      bottom: ["-150%", "-40%"],
      left: ["0%", "0%"],
      duration: 200,
      easing: "linear",
    },
    8000
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
      bottom: ["-50%", "20%"],
      left: ["13%", "13%"],
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
      bottom: ["-50%", "20%"],
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
      bottom: ["0%", "69%"],
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
      bottom: ["-5%", "63.5%"],
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
      targets: treeWrapper,
      bottom: "-150%",
      duration: 200,
      easing: "linear",
    },
    8800
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
      targets: unicycleProfileGirlWrapper,
      bottom: {
        value: "63%",
        duration: 100,
      },
      left: {
        value: "68%",
        duration: 1000,
      },

      easing: "linear",
    },
    9300
  )
  .add(
    {
      targets: unicycleProfileGirlWrapper,
      bottom: {
        value: "63%",
        duration: 100,
      },
      left: {
        value: "68%",
        duration: 1000,
      },

      easing: "linear",
    },
    9300
  );

// .add(
//   {
//     targets: panelkaWrapperRight,
//     translateX: "-100%",
//     duration: 400,
//     easing: "linear",
//   },
//   8300
// );

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
  window.addEventListener("scroll", () => {
    neCirkTimeline.seek(window.pageYOffset);
  });
});
