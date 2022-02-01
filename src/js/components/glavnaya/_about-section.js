import anime from "../../vendor/anime.min";

const jugglerWrapper = document.querySelector(".juggler__wrapper");

const starWrapper = document.querySelector(".star__wrapper");

const jumpers = document.querySelectorAll(".jumper__wrapper");
const jumper1 = jumpers[0];
const jumper2 = jumpers[1];

const clouds = document.querySelector(".clouds__wrapper");

const aboutContent1 = document.querySelector(".about-content-1");
const aboutContent2 = document.querySelector(".about-content-2");
const aboutContent3 = document.querySelector(".about-content-3");

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
      targets: starWrapper,
      bottom: ["-50%", "60%"],
      left: ["25%", "25%"],
      translateX: ["-50%", "-50%"],
      translateY: ["50%", "50%"],
      scale: [0.6, 0.6],
      duration: 500,
      easing: "linear",
    },
    2600
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
    5500
  );

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", () => {
    console.log(window.pageYOffset);
    // if (window.pageYOffset === 3200) {
    //   anime({
    //     targets: aboutContent1,
    //     translateX: ["500%", "0%"],
    //     opacity: [0, 1],
    //     duration: 1500,
    //     autoplay: true,
    //     easing: "linear",
    //   });
    // }
    aboutTimeline.seek(window.pageYOffset);
  });
});
