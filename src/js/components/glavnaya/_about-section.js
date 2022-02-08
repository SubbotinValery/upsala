import anime from "../../vendor/anime.min";

const section = document.querySelector(".about-section");

const jugglerWrapper = section.querySelector(".juggler__wrapper");

const jumper1 = section.querySelector(".jumper__wrapper-1");
const jumper2 = section.querySelector(".jumper__wrapper-2");

const cloudWrapper = section.querySelector(".cloud__wrapper");

const aboutContent1 = section.querySelector(".about-content-1");
const aboutContent2 = section.querySelector(".about-content-2");
const aboutContent3 = section.querySelector(".about-content-3");

const aboutTimeline = anime
  .timeline({ autoplay: false })
  .add({
    delay: 2500,
    targets: jugglerWrapper,
    bottom: ["-50%", "40%"],
    left: ["25%", "25%"],
    translateX: ["-50%", "-50%"],
    translateY: ["50%", "50%"],
    scale: [0.8, 0.8],
    duration: 500,
    easing: "linear",
  })
  .add(
    {
      targets: aboutContent1,
      opacity: [0, 1],
      translateX: ["100%", "0%"],
      duration: 100,
      easing: "linear",
    },
    "-=300"
  )
  .add(
    {
      targets: aboutContent2,
      opacity: [0, 1],
      translateX: ["100%", "0%"],
      duration: 100,
      easing: "linear",
    },
    "+=500"
  )
  .add(
    {
      targets: jugglerWrapper,
      bottom: "-50%",
      duration: 500,
      easing: "linear",
    },
    4100
  )
  .add(
    {
      targets: jumper1,
      opacity: {
        value: [0, 1],
        duration: 100,
      },
      bottom: ["50%", "-50%"],
      right: ["60%", "60%"],
      translateX: ["50%", "50%"],
      translateY: ["50%", "50%"],
      scale: [0.15, 0.15],
      duration: 600,
      easing: "linear",
    },
    5400
  )
  .add(
    {
      targets: aboutContent3,
      opacity: [0, 1],
      translateX: ["100%", "0%"],
      duration: 100,
      easing: "linear",
    },
    "-=700"
  );

document.addEventListener("DOMContentLoaded", function () {
  let jumperBlock = anime({
    targets: jumper2,
    top: ["-170%", "250%"],
    right: ["-20%", "60%"],
    translateX: ["50%", "50%"],
    translateY: ["-50%", "-50%"],
    opacity: {
      value: [0, 1],
      duration: 200,
    },
    scale: [0.1, 0.1],
    duration: 3000,
    loop: true,
    autoplay: false,
    easing: "linear",
    direction: "normal",
  });

  window.addEventListener("scroll", () => {
    console.log(window.pageYOffset);
    if (window.pageYOffset >= 5000) {
      jumperBlock.play();
    }
    if (window.pageYOffset >= 5300) {
      jumperBlock.restart();
    }
    if (window.pageYOffset < 5000) {
      jumperBlock.restart();
    }
    aboutTimeline.seek(window.pageYOffset);
  });
});
