import anime from "../../vendor/anime.min";

const section = document.querySelector(".proftruppa-section");

const cirkclerWrapper = section.querySelector(".cirkcler__wrapper");
const cirkcler = section.querySelector(".cirkcler");

const kacheliWrapper = section.querySelector(".kacheli__wrapper");
const kacheliActorLeft = kacheliWrapper.querySelector(".actor-left");
const kacheliActorRight = kacheliWrapper.querySelector(".actor-right");
const kacheliActorBrevno = kacheliWrapper.querySelector(".brevno");

const cloudWrapper1 = section.querySelector(".cloud__wrapper-1");
const cloudWrapper2 = section.querySelector(".cloud__wrapper-2");
const cloudWrapper3 = section.querySelector(".cloud__wrapper-3");

const titleRegular = section.querySelector(".proftruppa__title");

const proftruppaTimeline = anime
  .timeline({ autoplay: false })
  .add(
    {
      targets: titleRegular,
      translateX: [0, "-100vw"],
      duration: 400,
      easing: "linear",
    },
    12500
  )
  .add(
    {
      targets: cirkclerWrapper,
      bottom: ["-50%", "60%"],
      left: ["25%", "25%"],
      translateX: ["-50%", "-50%"],
      translateY: ["50%", "50%"],
      duration: 500,
      easing: "linear",
    },
    12100
  )
  .add(
    {
      targets: cirkclerWrapper,
      bottom: "-50%",
      duration: 500,
      easing: "linear",
    },
    12800
  )
  .add(
    {
      targets: cloudWrapper1,
      bottom: ["-50%", "27%"],
      left: ["25%", "25%"],
      translateX: ["-50%", "-50%"],
      translateY: ["50%", "50%"],
      scale: [0.6, 0.6],
      duration: 500,
      easing: "linear",
    },
    12100
  )
  .add(
    {
      targets: cloudWrapper1,
      bottom: "-50%",
      duration: 500,
      easing: "linear",
    },
    12800
  )
  .add(
    {
      targets: cloudWrapper2,
      bottom: ["40%", "60%"],
      right: ["-25%", "25%"],
      translateX: ["50%", "50%"],
      translateY: ["50%", "50%"],
      scale: [0.6, 0.6],
      duration: 300,
      easing: "linear",
    },
    12400
  )
  .add(
    {
      targets: cloudWrapper3,
      bottom: ["30%", "30%"],
      right: ["-25%", "15%"],
      translateX: ["50%", "50%"],
      translateY: ["50%", "50%"],
      scale: [0.4, 0.4],
      duration: 300,
      easing: "linear",
    },
    12500
  )
  .add(
    {
      targets: cloudWrapper2,
      right: "-25%",
      duration: 500,
      easing: "linear",
    },
    13300
  )
  .add(
    {
      targets: cloudWrapper3,
      right: "-25%",
      duration: 500,
      easing: "linear",
    },
    13300
  );

document.addEventListener("DOMContentLoaded", function () {
  anime({
    targets: cirkcler,
    translateY: ["-5%", "5%"],
    rotate: [15, 0],
    duration: 1500,
    loop: true,
    direction: "alternate",
    easing: "easeInOutQuad",
  });
  anime({
    targets: kacheliActorBrevno,
    translateX: ["-50%", "-50%"],
    rotate: [0, -40],
    // duration: 1500,
    loop: true,
    direction: "alternate",
    easing: "easeInOutQuad",
  });
  anime({
    targets: kacheliActorLeft,
    translateX: ["-50%", "-50%"],
    translateY: ["0%", "51%"],
    rotate: [-5, -5],
    // duration: 1500,
    loop: true,
    direction: "alternate",
    easing: "easeInOutQuad",
  });
  anime({
    targets: kacheliActorRight,
    translateX: ["-50%", "-50%"],
    translateY: ["0%", "-65%"],
    // duration: 1500,
    loop: true,
    direction: "alternate",
    easing: "easeInOutQuad",
  });
  window.addEventListener("scroll", () => {
    proftruppaTimeline.seek(window.pageYOffset);
  });
});
