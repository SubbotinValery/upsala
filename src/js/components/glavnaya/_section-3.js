const section = document.querySelector(".section-3");

const jugglerWrapper = section.querySelector(".juggler__wrapper");

const jumper1 = section.querySelector(".jumper__wrapper-1");
const jumper2 = section.querySelector(".jumper__wrapper-2");
const cloud = section.querySelector(".cloud__wrapper");

const aboutContent1 = section.querySelector(".content-1");
const aboutContent2 = section.querySelector(".content-2");
const aboutContent3 = section.querySelector(".content-3");

const starWrapper = document.querySelector("#indexPage > .star__wrapper");
const clouds = document.querySelectorAll("#indexPage > .cloud__item");

const whenstartJuggler = window.innerWidth > 1024 ? "+=2300" : "+=2100";

const aboutTimeline = anime
  .timeline({ autoplay: false })
  .add(
    {
      targets: clouds,
      bottom: "-2%",
      duration: 300,
      easing: "linear",
    },
    whenstartJuggler
  )
  .add(
    {
      targets: jugglerWrapper,
      bottom: ["-100%", "30%"],
      left: () => {
        return window.innerWidth > 1024 ? ["25%", "25%"] : ["50%", "50%"];
      },
      translateX: ["-50%", "-50%"],
      translateY: ["50%", "50%"],
      duration: 500,
      easing: "linear",
    },
    "-=300"
  )
  .add({
    targets: starWrapper,
    bottom: () => {
      return window.innerWidth > 1024 ? ["-100%", "50%"] : ["-100%", "30%"];
    },
    left: () => {
      return window.innerWidth > 1024 ? ["25%", "25%"] : ["50%", "50%"];
    },
    translateX: ["-50%", "-50%"],
    translateY: ["50%", "50%"],
    duration: 500,
    easing: "linear",
  })
  .add(
    {
      targets: jugglerWrapper,
      bottom: "-100%",
      duration: 500,
      easing: "linear",
    },
    "+=100"
  )
  .add(
    {
      targets: jumper1,
      opacity: {
        value: [0, 1],
        duration: 100,
      },
      bottom: ["70%", "-50%"],
      right: ["60%", "60%"],
      translateX: ["50%", "50%"],
      translateY: ["50%", "50%"],
      duration: 500,
      easing: "linear",
    },
    "+=400"
  )
  .add(
    {
      targets: starWrapper,
      bottom: "-100%",
      duration: 400,
      easing: "linear",
    },
    "-=300"
  )
  .add({
    targets: clouds,
    bottom: "-50%",
    duration: 300,
    easing: "linear",
  });

document.addEventListener("DOMContentLoaded", function () {
  // let topBorder = jumper2.getBoundingClientRect().top;
  // let bottomBorder = jumper2.getBoundingClientRect().bottom;

  // window.addEventListener("resize", function (event) {
  //   topBorder = jumper2.getBoundingClientRect().top;
  //   bottomBorder = jumper2.getBoundingClientRect().bottom;
  // });

  // const jumperBlockTimeline = anime
  //   .timeline({ loop: true, autoplay: false, direction: "normal" })
  //   .add({
  //     targets: jumper2,
  //     scale: [0.1, 0.1],
  //     translateX: ["50%", "50%"],
  //     translateY: ["-50%", "-50%"],
  //     top: ["-210%", "-140%"],
  //     right: ["-40%", "-20%"],
  //     duration: 1500,
  //     easing: "easeInSine",
  //   })
  //   .add({
  //     targets: jumper2,
  //     top: "-150%",
  //     right: "-10%",
  //     duration: 500,
  //     easing: "easeOutSine",
  //   })
  //   .add({
  //     targets: jumper2,
  //     top: "-80%",
  //     right: "5%",
  //     easing: "easeOutSine",
  //   });

  // const jumperBlockCloudTimeline = anime
  //   .timeline({ autoplay: false, loop: false })
  //   .add({
  //     targets: cloud,
  //     scale: [0.5, 0.5],
  //     translateX: ["50%", "50%"],
  //     translateY: ["-50%", "-50%"],
  //     top: ["50%", "50%"],
  //     right: ["-30%", "12%"],
  //     easing: "easeInSine",
  //     duration: 1000,
  //     loop: false,
  //   });

  window.addEventListener("scroll", () => {
    // function numberRange(start, end) {
    //   return new Array(end - start).fill().map((d, i) => i + start);
    // }

    // console.log(topBorder);

    // let jumperBlockRangeStart = numberRange(topBorder, topBorder + 50);
    // let jumperBlockRangeEnd = numberRange(bottomBorder, bottomBorder + 50);

    // if (window.pageYOffset < topBorder) {
    //   jumperBlockTimeline.restart();
    //   jumperBlockTimeline.pause();
    //   jumperBlockCloudTimeline.restart();
    //   jumperBlockCloudTimeline.pause();
    // }
    // if (jumperBlockRangeStart.some((value) => value === window.pageYOffset)) {
    //   jumperBlockTimeline.play();
    //   jumperBlockCloudTimeline.play();
    // }
    // if (jumperBlockRangeEnd.some((value) => value === window.pageYOffset)) {
    //   jumperBlockTimeline.play();
    //   jumperBlockCloudTimeline.play();
    // }
    // if (window.pageYOffset > bottomBorder + 50) {
    //   jumperBlockTimeline.restart();
    //   jumperBlockTimeline.pause();
    //   jumperBlockCloudTimeline.restart();
    //   jumperBlockCloudTimeline.pause();
    // }
    aboutTimeline.seek(window.pageYOffset);
  });
});
