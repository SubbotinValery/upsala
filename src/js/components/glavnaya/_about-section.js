import anime from "../../vendor/anime.min";

const section = document.querySelector(".about-section");

const jugglerWrapper = section.querySelector(".juggler__wrapper");

const jumper1 = section.querySelector(".jumper__wrapper-1");

const jumper2 = section.querySelector(".jumper__wrapper-2");
const cloud = section.querySelector(".cloud__wrapper");

const aboutContent1 = section.querySelector(".about-content-1");
const aboutContent2 = section.querySelector(".about-content-2");
const aboutContent3 = section.querySelector(".about-content-3");

function numberRange(start, end) {
  return new Array(end - start).fill().map((d, i) => i + start);
}
const jumperBlockRange = numberRange(4500, 4550);

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
  let jumperBlockTimeline = anime
    .timeline({ loop: true, autoplay: false, direction: "normal" })
    .add(
      {
        targets: jumper2,
        scale: [0.1, 0.1],
        translateX: ["50%", "50%"],
        translateY: ["-50%", "-50%"],
        top: ["-210%", "-140%"],
        right: ["-40%", "-20%"],
        duration: 1500,
        easing: "easeInSine",
      },
      0
    )
    .add({
      targets: jumper2,
      top: "-150%",
      right: "-10%",
      duration: 500,
      easing: "easeOutSine",
    })
    .add({
      targets: jumper2,
      top: "-80%",
      right: "5%",
      easing: "easeOutSine",
    });

  const jumperBlockCloudTimeline = anime
    .timeline({ autoplay: false, loop: false })
    .add({
      targets: cloud,
      scale: [0.5, 0.5],
      translateX: ["50%", "50%"],
      translateY: ["-50%", "-50%"],
      top: ["50%", "50%"],
      right: ["-30%", "12%"],
      easing: "easeInSine",
      duration: 1000,
      loop: false,
    });

  window.addEventListener("scroll", () => {
    if (window.pageYOffset < 4500) {
      jumperBlockTimeline.restart();
      jumperBlockTimeline.pause();
      jumperBlockCloudTimeline.restart();
      jumperBlockCloudTimeline.pause();
    }
    if (jumperBlockRange.some((value) => value === window.pageYOffset)) {
      jumperBlockTimeline.play();
      jumperBlockCloudTimeline.play();
    }
    if (window.pageYOffset >= 5200) {
      jumperBlockTimeline.restart();
      jumperBlockTimeline.pause();
      jumperBlockCloudTimeline.restart();
      jumperBlockCloudTimeline.pause();
    }
    aboutTimeline.seek(window.pageYOffset);
  });
});
