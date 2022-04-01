const section = document.querySelector(".section-6");

const cirkclerWrapper = section.querySelector(".cirkcler__wrapper");
const cirkcler = section.querySelector(".cirkcler");

const kacheliWrapper = section.querySelector(".kacheli__wrapper");
const kacheliActorLeft = kacheliWrapper.querySelector(".actor-left");
const kacheliActorRight = kacheliWrapper.querySelector(".actor-right");
const kacheliActorBrevno = kacheliWrapper.querySelector(".brevno");

// const cloudWrapper1 = section.querySelector(".cloud__wrapper-1");
// const cloudWrapper2 = section.querySelector(".cloud__wrapper-2");
// const cloudWrapper3 = section.querySelector(".cloud__wrapper-3");
// const cloudWrapper4 = section.querySelector(".cloud__wrapper-4");
// const cloudWrapper5 = section.querySelector(".cloud__wrapper-5");
// const cloudWrapper6 = section.querySelector(".cloud__wrapper-6");
// const cloudWrapper7 = section.querySelector(".cloud__wrapper-7");

// const yellowBgWrapper = section.querySelector(".yellow-bg__wrapper");
// const yellowBg = section.querySelector(".yellow-bg");
// const treeWrapper1 = section.querySelector(".tree__wrapper-1");
// const treeWrapper2 = section.querySelector(".tree__wrapper-2");
// const treeWrapper3 = section.querySelector(".tree__wrapper-3");
// const treeWrapper4 = section.querySelector(".tree__wrapper-4");
// const treeWrapper5 = section.querySelector(".tree__wrapper-5");
// const treeWrapper6 = section.querySelector(".tree__wrapper-6");
// const treeWrapper7 = section.querySelector(".tree__wrapper-7");

// const treeWrapperAll = document.querySelectorAll(
//   ".proftruppa-section > .tree__wrapper"
// );

// const titleRegular = section.querySelector(".proftruppa__title");

const artistDropWrapper = section.querySelector(".artist-drop__wrapper");
const artistWrapper1 = section.querySelector(".artist__wrapper-1");
const artistWrapper2 = section.querySelector(".artist__wrapper-2");
const artistWrapper3 = section.querySelector(".artist__wrapper-3");
const artistAll = section.querySelectorAll(".artist");

const treeBlock = document.querySelector("#indexPage > .tree__block");
const starWrapper = document.querySelector("#indexPage > .star__wrapper");

const proftruppaTimeline = anime
  .timeline({ autoplay: false })
  .add({
    delay: 6000,
    targets: cirkclerWrapper,
    bottom: ["-50%", "60%"],
    left: ["25%", "25%"],
    translateX: ["-50%", "-50%"],
    translateY: ["50%", "50%"],
    duration: 500,
    easing: "linear",
  })
  .add(
    {
      targets: starWrapper,
      bottom: "60%",
      left: () => {
        return window.innerWidth > 1024 ? ["25%", "25%"] : ["50%", "50%"];
      },
      translateX: ["-50%", "-50%"],
      translateY: ["50%", "50%"],
      duration: 500,
      easing: "linear",
    },
    "-=500"
  )
  .add(
    {
      targets: cirkclerWrapper,
      bottom: "-50%",
      duration: 500,
      easing: "linear",
    },
    "+=200"
  )
  .add(
    {
      targets: treeBlock,
      bottom: ["-100%", "-3%"],
      duration: 500,
      easing: "linear",
    },
    "+=700"
  )
  .add(
    {
      targets: treeBlock,
      bottom: "-100%",
      duration: 500,
      easing: "linear",
    },
    "+=100"
  );
// .add(
//   {
//     targets: cloudWrapper1,
//     bottom: ["-50%", "27%"],
//     left: ["25%", "25%"],
//     translateX: ["-50%", "-50%"],
//     translateY: ["50%", "50%"],
//     scale: [0.6, 0.6],
//     duration: 500,
//     easing: "linear",
//   },
//   12100
// )
// .add(
//   {
//     targets: cloudWrapper1,
//     bottom: "-50%",
//     duration: 500,
//     easing: "linear",
//   },
//   12800
// )
// .add(
//   {
//     targets: cloudWrapper2,
//     bottom: ["60%", "70%"],
//     left: ["-25%", "5%"],
//     translateX: ["-50%", "-50%"],
//     translateY: ["50%", "50%"],
//     scale: [0.6, 0.5],
//     duration: 400,
//     easing: "easeOutSine",
//   },
//   12400
// )
// .add(
//   {
//     targets: cloudWrapper3,
//     bottom: ["55%", "50%"],
//     right: ["-25%", "15%"],
//     translateX: ["50%", "50%"],
//     translateY: ["50%", "50%"],
//     scale: [0.6, 0.4],
//     duration: 400,
//     easing: "easeOutSine",
//   },
//   12450
// )
// .add(
//   {
//     targets: cloudWrapper4,
//     bottom: ["50%", "25%"],
//     right: ["-25%", "5%"],
//     translateX: ["50%", "50%"],
//     translateY: ["50%", "50%"],
//     scale: [0.6, 0.6],
//     duration: 400,
//     easing: "easeOutSine",
//   },
//   12500
// )
// .add(
//   {
//     targets: cloudWrapper2,
//     left: "-25%",
//     duration: 300,
//     easing: "linear",
//   },
//   13300
// )
// .add(
//   {
//     targets: cloudWrapper3,
//     right: "-25%",
//     duration: 300,
//     easing: "linear",
//   },
//   13300
// )
// .add(
//   {
//     targets: cloudWrapper4,
//     right: "-25%",
//     duration: 300,
//     easing: "linear",
//   },
//   13300
// )
// .add(
//   {
//     targets: cloudWrapper5,
//     bottom: ["80%", "80%"],
//     left: ["25%", "25%"],
//     translateX: ["-50%", "-50%"],
//     translateY: ["50%", "50%"],
//     scale: [0.37, 0.37],
//     duration: 300,
//     opacity: [0, 1],
//   },
//   13400
// )
// .add(
//   {
//     targets: cloudWrapper6,
//     bottom: ["65%", "65%"],
//     left: ["12%", "12%"],
//     translateX: ["-50%", "-50%"],
//     translateY: ["50%", "50%"],
//     scale: [0.3, 0.3],
//     duration: 300,
//     opacity: [0, 1],
//   },
//   13400
// )
// .add(
//   {
//     targets: cloudWrapper7,
//     bottom: ["45%", "45%"],
//     left: ["20%", "20%"],
//     translateX: ["-50%", "-50%"],
//     translateY: ["50%", "50%"],
//     scale: [0.28, 0.28],
//     duration: 300,
//     opacity: [0, 1],
//   },
//   13400
// )
// .add(
//   {
//     targets: yellowBgWrapper,
//     bottom: ["-30%", "27%"],
//     left: ["0%", "0%"],
//     right: ["0%", "0%"],
//     width: "100%",
//     translateY: ["50%", "50%"],
//     duration: 300,
//     easing: "linear",
//   },
//   13500
// )
// .add(
//   {
//     targets: treeWrapper1,
//     translateY: ["50%", "50%"],
//     translateX: ["-50%", "-50%"],
//     bottom: ["-35%", "3%"],
//     left: ["5%", "5%"],
//     duration: 300,
//     easing: "linear",
//   },
//   13500
// )
// .add(
//   {
//     targets: treeWrapper2,
//     translateY: ["50%", "50%"],
//     translateX: ["-50%", "-50%"],
//     bottom: ["-35%", "-10%"],
//     left: ["23%", "23%"],
//     scale: [0.8, 0.8],
//     duration: 300,
//     easing: "linear",
//   },
//   13500
// )
// .add(
//   {
//     targets: treeWrapper3,
//     translateY: ["50%", "50%"],
//     translateX: ["-50%", "-50%"],
//     bottom: ["-35%", "2%"],
//     left: ["40%", "40%"],
//     duration: 300,
//     easing: "linear",
//   },
//   13500
// )
// .add(
//   {
//     targets: treeWrapper4,
//     translateY: ["50%", "50%"],
//     translateX: ["-50%", "-50%"],
//     bottom: ["-35%", "-7%"],
//     left: ["53%", "53%"],
//     duration: 300,
//     easing: "linear",
//   },
//   13500
// )
// .add(
//   {
//     targets: treeWrapper5,
//     translateY: ["50%", "50%"],
//     translateX: ["-50%", "-50%"],
//     bottom: ["-35%", "13%"],
//     left: ["67%", "67%"],
//     scale: [0.95, 0.95],
//     duration: 300,
//     easing: "linear",
//   },
//   13500
// )
// .add(
//   {
//     targets: treeWrapper6,
//     translateY: ["50%", "50%"],
//     translateX: ["-50%", "-50%"],
//     bottom: ["-35%", "-13%"],
//     left: ["77%", "77%"],
//     duration: 300,
//     easing: "linear",
//   },
//   13500
// )
// .add(
//   {
//     targets: treeWrapper7,
//     translateY: ["50%", "50%"],
//     translateX: ["-50%", "-50%"],
//     bottom: ["-35%", "1%"],
//     left: ["90%", "90%"],
//     scale: [1.1, 1.1],
//     duration: 300,
//     easing: "linear",
//   },
//   13500
// )
// .add(
//   {
//     targets: yellowBgWrapper,
//     bottom: "-30%",
//     duration: 300,
//     easing: "linear",
//   },
//   14000
// )
// .add(
//   {
//     targets: treeWrapperAll,
//     bottom: "-100%",
//     duration: 300,
//     easing: "linear",
//   },
//   14000
// )
// .add(
//   {
//     targets: cloudWrapper5,
//     opacity: {
//       value: 0,
//       duration: 100,
//     },
//     left: {
//       delay: 300,
//       value: "-50%",
//       duration: 1,
//     },
//     easing: "linear",
//   },
//   14000
// )
// .add(
//   {
//     targets: cloudWrapper6,
//     opacity: {
//       value: 0,
//       duration: 100,
//     },
//     left: {
//       delay: 300,
//       value: "-50%",
//       duration: 1,
//     },
//     easing: "linear",
//   },
//   14000
// )
// .add(
//   {
//     targets: cloudWrapper7,
//     opacity: {
//       value: 0,
//       duration: 100,
//     },
//     left: {
//       delay: 300,
//       value: "-50%",
//       duration: 1,
//     },
//     easing: "linear",
//   },
//   14000
// );

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
    loop: true,
    direction: "alternate",
    easing: "easeInOutQuad",
  });
  anime({
    targets: kacheliActorLeft,
    translateX: ["-50%", "-50%"],
    translateY: ["0%", "51%"],
    rotate: [-5, -5],
    loop: true,
    direction: "alternate",
    easing: "easeInOutQuad",
  });
  anime({
    targets: kacheliActorRight,
    translateX: ["-50%", "-50%"],
    translateY: ["0%", "-65%"],
    loop: true,
    direction: "alternate",
    easing: "easeInOutQuad",
  });

  const artistDropTimline = anime
    .timeline({
      loop: true,
      autoplay: false,
      direction: "normal",
      duration: 2000,
    })
    .add(
      {
        targets: artistWrapper1,
        translateX: ["-50%", "-50%"],
        translateY: ["-50%", "-50%"],
        top: ["-35%", "130%"],
        left: ["20%", "20%"],
        easing: "easeInSine",
      },
      0
    )
    .add(
      {
        targets: artistWrapper2,
        translateX: ["-50%", "-50%"],
        translateY: ["-50%", "-50%"],
        top: ["-35%", "130%"],
        left: ["50%", "50%"],
        easing: "easeInSine",
      },
      1000
    )
    .add(
      {
        targets: artistWrapper3,
        translateX: ["-50%", "-50%"],
        translateY: ["-50%", "-50%"],
        top: ["-35%", "130%"],
        left: ["80%", "80%"],
        easing: "easeInSine",
      },
      500
    );

  anime({
    targets: artistAll,
    rotate: [-35, 35],
    duration: 1500,
    easing: "linear",
    autoplay: true,
    loop: true,
    direction: "alternate",
  });

  window.addEventListener("scroll", () => {
    let topBorder;
    let bottomBorder;
    if (window.innerWidth > 1024) {
      topBorder =
        window.pageYOffset + section.getBoundingClientRect().top - 200;
      bottomBorder =
        window.pageYOffset + section.getBoundingClientRect().bottom;
    } else {
      topBorder =
        window.pageYOffset + artistDropWrapper.getBoundingClientRect().top;
      bottomBorder =
        window.pageYOffset + artistDropWrapper.getBoundingClientRect().bottom;
    }

    if (window.pageYOffset < topBorder) {
      artistDropTimline.restart();
      artistDropTimline.pause();
    }
    if (window.pageYOffset > topBorder) {
      artistDropTimline.play();
    }
    if (window.pageYOffset >= bottomBorder) {
      artistDropTimline.restart();
      artistDropTimline.pause();
    }

    proftruppaTimeline.seek(window.pageYOffset);
  });
});
