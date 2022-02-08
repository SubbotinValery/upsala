import anime from "../../vendor/anime.min";

const glavnaya = document.querySelector(".glavnaya");

const starWrapper = glavnaya.querySelector(".glavnaya > .star__wrapper");
const cloudWrapper1 = document.querySelector(".glavnaya > .cloud__wrapper-1");
const cloudWrapper2 = document.querySelector(".glavnaya > .cloud__wrapper-2");
const cloudWrapper3 = document.querySelector(".glavnaya > .cloud__wrapper-3");
const cloudWrapper4 = document.querySelector(".glavnaya > .cloud__wrapper-4");
const cloudWrapper5 = document.querySelector(".glavnaya > .cloud__wrapper-5");
const cloudWrapper6 = document.querySelector(".glavnaya > .cloud__wrapper-6");

const cloudWrapperAll = document.querySelectorAll(
  ".glavnaya > .cloud__wrapper"
);

const glavnayaTimeline = anime
  .timeline({ autoplay: false })
  .add(
    {
      targets: cloudWrapper1,
      translateY: ["50%", "50%"],
      translateX: ["-50%", "-50%"],
      bottom: ["-17%", "10%"],
      left: ["10%", "10%"],
      scale: [0.7, 0.7],
      duration: 300,
      easing: "linear",
      begin: function () {
        cloudWrapper1.style.position = "fixed";
      },
    },
    500
  )
  .add(
    {
      targets: cloudWrapper2,
      translateY: ["50%", "50%"],
      translateX: ["-50%", "-50%"],
      bottom: ["-17%", "5%"],
      left: ["25%", "25%"],
      scale: [0.6, 0.6],
      duration: 300,
      easing: "linear",
      begin: function () {
        cloudWrapper2.style.position = "fixed";
        cloudWrapper2.style.zIndex = 2;
      },
    },
    500
  )
  .add(
    {
      targets: cloudWrapper3,
      translateY: ["50%", "50%"],
      translateX: ["-50%", "-50%"],
      bottom: ["-17%", "5%"],
      left: ["40%", "40%"],
      scale: [0.75, 0.75],
      duration: 300,
      easing: "linear",
      begin: function () {
        cloudWrapper3.style.position = "fixed";
      },
    },
    500
  )
  .add(
    {
      targets: cloudWrapper4,
      translateY: ["50%", "50%"],
      translateX: ["50%", "50%"],
      bottom: ["-17%", "12%"],
      right: ["45%", "45%"],
      scale: [0.65, 0.65],
      duration: 300,
      easing: "linear",
      begin: function () {
        cloudWrapper4.style.position = "fixed";
      },
    },
    500
  )
  .add(
    {
      targets: cloudWrapper5,
      translateY: ["50%", "50%"],
      translateX: ["50%", "50%"],
      bottom: ["-17%", "5%"],
      right: ["25%", "25%"],
      scale: [0.6, 0.6],
      duration: 300,
      easing: "linear",
      begin: function () {
        cloudWrapper5.style.position = "fixed";
      },
    },
    500
  )
  .add(
    {
      targets: cloudWrapper6,
      translateY: ["50%", "50%"],
      translateX: ["50%", "50%"],
      bottom: ["-17%", "12%"],
      right: ["7%", "7%"],
      scale: [0.75, 0.75],
      duration: 300,
      easing: "linear",
      begin: function () {
        cloudWrapper6.style.position = "fixed";
      },
    },
    500
  )
  .add(
    {
      targets: starWrapper,
      translateY: ["50%", "50%"],
      translateX: ["-50%", "-50%"],
      bottom: ["-50%", "60%"],
      left: ["25%", "25%"],
      scale: [0.5, 0.5],
      duration: 500,
      easing: "linear",
    },
    2500
  )
  .add(
    {
      targets: cloudWrapperAll,
      bottom: "-17%",
      duration: 200,
      opacity: [1, 0],
      easing: "linear",
    },
    5600
  );

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", () => {
    glavnayaTimeline.seek(window.pageYOffset);
  });
});
