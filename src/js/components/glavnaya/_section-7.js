// import anime from "../../vendor/anime.min";

// const section = document.querySelector(".incluzivnii-proekt-section");

// const mountainWrapper = section.querySelector(".mountain__wrapper");
// const boyOnBallWrapper = section.querySelector(".boy-on-ball__wrapper");
// const boyOnBall = section.querySelector(".boy-on-ball");
// const giraffeWrapper = section.querySelector(".giraffe__wrapper");
// const giraffe = section.querySelector(".giraffe");
// const panelkaBlockWrapper = section.querySelector(".panelka-block__wrapper");
// const panelkaBackWrapper = section.querySelector(".panelka-back__wrapper");
// const girlOnHoduliWrapper = section.querySelector(".girl-on-hoduli__wrapper");
// const girlOnHoduli = section.querySelector(".girl-on-hoduli");
// const yellowBgWrapper = section.querySelector(".yellow-bg__wrapper");
// const yellowBg = section.querySelector(".yellow-bg");
// const cloudWrapper = section.querySelector(".cloud__wrapper");

// const animations = [
//   mountainWrapper,
//   boyOnBallWrapper,
//   giraffeWrapper,
//   panelkaBlockWrapper,
//   panelkaBackWrapper,
//   girlOnHoduliWrapper,
//   yellowBgWrapper,
//   cloudWrapper,
// ];

// const content1 = section.querySelector(".incluzivnii-proekt-content-1");
// const content2 = section.querySelector(".incluzivnii-proekt-content-2");
// const content3 = section.querySelector(".incluzivnii-proekt-content-3");

// const titleRegular = document.querySelector(
//   ".incluzivnii-proekt-title > *:not(.italic)"
// );
// const titleOutline = document.querySelector(
//   ".incluzivnii-proekt-title  > .italic"
// );

// const incluzivniiProektTimeline = anime
//   .timeline({ autoplay: false })
//   .add(
//     {
//       targets: content1,
//       opacity: [0, 1],
//       translateX: ["100%", "0%"],
//       duration: 200,
//       easing: "linear",
//     },
//     15100
//   )
//   .add(
//     {
//       targets: titleRegular,
//       translateX: [0, "-100vw"],
//       duration: 400,
//       easing: "linear",
//     },
//     15100
//   )
//   .add(
//     {
//       targets: titleOutline,
//       translateX: [0, "100vw"],
//       duration: 400,
//       easing: "linear",
//     },
//     15100
//   )
//   .add(
//     {
//       targets: mountainWrapper,
//       bottom: ["-100%", "20%"],
//       left: ["50%", "50%"],
//       translateX: ["-50%", "-50%"],
//       translateY: ["50%", "50%"],
//       opacity: [0, 1],
//       duration: 500,
//       easing: "linear",
//     },
//     15200
//   )
//   .add(
//     {
//       targets: cloudWrapper,
//       bottom: ["15%", "15%"],
//       left: ["-50%", "20%"],
//       scale: [0.7, 0.7],
//       duration: 1000,
//       easing: "linear",
//     },
//     15800
//   )
//   .add(
//     {
//       targets: boyOnBallWrapper,
//       bottom: ["40%", "60%"],
//       left: ["-30%", "25%"],
//       translateX: ["-50%", "-50%"],
//       translateY: ["50%", "50%"],
//       rotate: [-30, 0],
//       scale: [0, 0.4],
//       duration: 500,
//       easing: "linear",
//     },
//     15800
//   )
//   .add(
//     {
//       targets: giraffeWrapper,
//       bottom: ["40%", "30%"],
//       left: ["-30%", "30%"],
//       translateX: ["-50%", "-50%"],
//       translateY: ["50%", "50%"],
//       scale: [0, 0.3],
//       duration: 500,
//       easing: "linear",
//     },
//     15800
//   )
//   .add(
//     {
//       targets: mountainWrapper,
//       bottom: "35%",
//       left: "70%",
//       scale: 0.6,
//       duration: 500,
//       easing: "linear",
//     },
//     15900
//   )
//   .add(
//     {
//       targets: mountainWrapper,
//       bottom: "40%",
//       left: "60%",
//       scale: 0.55,
//       duration: 500,
//       easing: "linear",
//     },
//     16400
//   )
//   .add(
//     {
//       targets: yellowBgWrapper,
//       bottom: ["-30%", "35%"],
//       right: ["43%", "43%"],
//       translateY: ["50%", "50%"],
//       translateX: ["50%", "50%"],
//       scale: [0.5, 0.5],
//       duration: 300,
//       easing: "linear",
//     },
//     16200
//   )
//   .add(
//     {
//       targets: panelkaBackWrapper,
//       bottom: ["-20%", "25%"],
//       right: ["30%", "30%"],
//       translateX: ["50%", "50%"],
//       translateY: ["50%", "50%"],
//       scale: [0.5, 0.5],
//       duration: 300,
//       easing: "linear",
//     },
//     16200
//   )
//   .add(
//     {
//       targets: panelkaBlockWrapper,
//       bottom: ["-25%", "20%"],
//       right: ["35%", "35%"],
//       translateX: ["50%", "50%"],
//       translateY: ["50%", "50%"],
//       scale: [0.5, 0.5],
//       duration: 300,
//       easing: "linear",
//     },
//     16250
//   )
//   .add(
//     {
//       targets: panelkaBlockWrapper,
//       bottom: ["-25%", "20%"],
//       right: ["35%", "35%"],
//       translateX: ["50%", "50%"],
//       translateY: ["50%", "50%"],
//       scale: [0.5, 0.5],
//       duration: 300,
//       easing: "linear",
//     },
//     16250
//   )
//   .add(
//     {
//       targets: content2,
//       opacity: [0, 1],
//       translateX: ["100%", "0%"],
//       duration: 200,
//       easing: "linear",
//     },
//     16700
//   )
//   .add(
//     {
//       targets: content3,
//       opacity: [0, 1],
//       translateX: ["100%", "0%"],
//       duration: 200,
//       easing: "linear",
//     },
//     17300
//   )
//   .add(
//     {
//       targets: girlOnHoduliWrapper,
//       bottom: ["40%", "40%"],
//       right: ["-10%", "40%"],
//       translateX: ["50%", "50%"],
//       translateY: ["50%", "50%"],
//       duration: 500,
//       easing: "linear",
//     },
//     17500
//   )
//   .add(
//     {
//       targets: animations,
//       opacity: 0,
//       duration: 100,
//       easing: "linear",
//     },
//     18100
//   )
//   .add(
//     {
//       targets: animations,
//       translateY: "200%",
//       duration: 1,
//       easing: "linear",
//     },
//     18300
//   );

// document.addEventListener("DOMContentLoaded", function () {
//   anime({
//     targets: boyOnBall,
//     rotate: [-5, 20],
//     duration: 1500,
//     loop: true,
//     direction: "alternate",
//     easing: "easeInOutQuad",
//   });
//   anime({
//     targets: giraffe,
//     rotate: [-10, 20],
//     translateX: ["20%", "-10%"],
//     duration: 1500,
//     loop: true,
//     direction: "alternate",
//     easing: "easeInOutQuad",
//   });
//   anime({
//     targets: girlOnHoduli,
//     rotate: [-10, 10],
//     // translateX: ["20%", "-20%"],
//     duration: 1500,
//     loop: true,
//     direction: "alternate",
//     easing: "easeInOutQuad",
//   });
//   anime({
//     targets: yellowBg,
//     translateY: ["5%", "-5%"],
//     duration: 2000,
//     loop: true,
//     direction: "alternate",
//     easing: "easeInOutQuad",
//   });
//   window.addEventListener("scroll", () => {
//     incluzivniiProektTimeline.seek(window.pageYOffset);
//   });
// });

// .add(
//   {
//     targets: panelkaWrapperLeft,
//     bottom: ["-100%", "18%"],
//     left: ["0%", "0%"],
//     translateY: ["50%", "50%"],
//     // translateX: ["-50%", "-50%"],
//     duration: 300,
//     easing: "linear",
//   },
//   "-=600"
// )
// .add(
//   {
//     targets: panelkaWrapperRight,
//     bottom: ["-100%", "20%"],
//     right: ["0%", "0%"],
//     translateY: ["50%", "50%"],
//     // translateX: ["50%", "50%"],
//     duration: 300,
//     easing: "linear",
//   },
//   "-=500"
// )
// .add(
//   {
//     targets: yellowBgWrapper,
//     bottom: ["-100%", "-5%"],
//     // translateX: ["-50%", "-50%"],
//     duration: 300,
//     easing: "linear",
//   },
//   "-=400"
// )
// .add(
//   {
//     targets: unicycleProfileGirlWrapper,
//     bottom: ["-100%", `${panelkaWrapperLeft.offsetHeight * 1.03}px`],
//     left: ["16%", "16%"],
//     translateY: ["50%", "50%"],
//     translateX: ["-50%", "-50%"],
//     rotate: [-10, -10],
//     duration: 300,
//     easing: "linear",
//   },
//   "-=300"
// )
// .add(
//   {
//     targets: unicycleProfileBoyWrapper,
//     bottom: ["-100%", `${panelkaWrapperLeft.offsetHeight}px`],
//     left: ["24%", "24%"],
//     translateY: ["50%", "50%"],
//     translateX: ["-50%", "-50%"],
//     rotate: [-10, -10],
//     duration: 300,
//     easing: "linear",
//   },
//   "-=300"
// );
// .add(
//   {
//     targets: elephantWrapper,
//     bottom: ["-20%", "59%"],
//     right: ["15%", "15%"],
//     translateY: ["50%", "50%"],
//     translateX: ["50%", "50%"],
//     scale: [0.5, 0.5],
//     duration: 500,
//     easing: "linear",
//   },
//   8500
// )
// .add(
//   {
//     targets: yellowBgWrapper,
//     bottom: "15%",
//     duration: 500,
//     easing: "linear",
//   },
//   8500
// )
// .add(
//   {
//     targets: childrensWrapper,
//     bottom: ["-30%", "18%"],
//     left: ["50%", "50%"],
//     translateX: ["-50%", "-50%"],
//     translateY: ["50%", "50%"],
//     scale: [0.5, 0.5],
//     duration: 500,
//     easing: "linear",
//   },
//   8500
// )
// .add(
//   {
//     targets: ropeWrapper,
//     opacity: [0, 1],
//     duration: 200,
//     easing: "linear",
//   },
//   9100
// )
// .add(
//   {
//     targets: unicycleProfileBoyWrapper,
//     bottom: {
//       value: "63%",
//       duration: 100,
//     },
//     left: {
//       value: "68%",
//       duration: 900,
//     },
//     easing: "linear",
//   },
//   9300
// )
// .add(
//   {
//     targets: unicycleProfileBoyWrapper,
//     left: "79%",
//     bottom: "71%",
//     duration: 300,
//     easing: "linear",
//   },
//   10300
// )
// .add(
//   {
//     targets: unicycleProfileBoyWrapper,
//     left: "110%",
//     bottom: "45%",
//     duration: 500,
//     easing: "linear",
//   },
//   10600
// )
// .add(
//   {
//     targets: unicycleProfileGirlWrapper,
//     bottom: {
//       value: "63%",
//       duration: 100,
//     },
//     left: {
//       value: "60.5%",
//       duration: 900,
//     },

//     easing: "linear",
//   },
//   9300
// )
// .add(
//   {
//     targets: unicycleProfileGirlWrapper,
//     left: "67%",
//     duration: 100,
//     easing: "linear",
//   },
//   10300
// )
// .add(
//   {
//     targets: unicycleProfileGirlWrapper,
//     left: "79%",
//     bottom: "71%",
//     duration: 200,
//     easing: "linear",
//   },
//   10500
// )
// .add(
//   {
//     targets: unicycleProfileGirlWrapper,
//     left: "110%",
//     bottom: "47%",
//     duration: 500,
//     easing: "linear",
//   },
//   10750
// )
// .add(
//   {
//     targets: elephantWrapper,
//     bottom: "71%",
//     right: "19%",
//     easing: "linear",
//     duration: 100,
//   },
//   10600
// )
// .add(
//   {
//     targets: elephantWrapper,
//     bottom: "45%",
//     right: "-20%",
//     easing: "linear",
//     duration: 500,
//   },
//   10750
// )
// .add(
//   {
//     targets: ropeWrapper,
//     opacity: 0,
//     duration: 200,
//     easing: "linear",
//   },
//   10400
// )
// .add(
//   {
//     targets: childrensWrapper,
//     bottom: "-30%",
//     duration: 500,
//     easing: "linear",
//   },
//   11000
// )
// .add(
//   {
//     targets: panelkaWrapperRight,
//     bottom: "-60%",
//     duration: 500,
//     easing: "linear",
//   },
//   11300
// )
// .add(
//   {
//     targets: panelkaWrapperLeft,
//     bottom: "-65%",
//     duration: 500,
//     easing: "linear",
//   },
//   11500
// )
// .add(
//   {
//     targets: yellowBgWrapper,
//     bottom: "-30%",
//     duration: 500,
//     easing: "linear",
//   },
//   11500
// )
// .add(
//   {
//     targets: yellowBgWrapper,
//     bottom: ["-30%", "15%"],
//     left: ["0%", "0%"],
//     right: ["0%", "0%"],
//     width: "100%",
//     translateY: ["50%", "50%"],
//     duration: 300,
//     easing: "linear",
//   },
//   7500
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
//   7500
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
//   7500
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
//   7500
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
//   7500
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
//   7500
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
//   7500
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
//   7500
// )
// .add(
//   {
//     targets: treeWrapperAll,
//     bottom: "-35%",
//     duration: 300,
//     easing: "linear",
//   },
//   8200
// )
// .add(
//   {
//     targets: yellowBgWrapper,
//     bottom: "-30%",
//     duration: 300,
//     easing: "linear",
//   },
//   8200
// );

document.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector(".section-7");
  const nextSection = document.querySelector(".section-8");

  const boyOnBallWrapper = section.querySelector(".img__block-1");

  const section7Timeline = anime
    .timeline({ autoplay: false })
    .add({
      delay: window.pageYOffset + section.getBoundingClientRect().top - 500,
      targets: boyOnBallWrapper,
      bottom: ["-50%", "80%"],
      left: ["20%", "20%"],
      translateX: ["-50%", "-50%"],
      translateY: ["50%", "50%"],
      duration: 500,
      easing: "linear",
    })
    .add(
      {
        targets: boyOnBallWrapper,
        left: "-50%",
        duration: 300,
        easing: "linear",
      },
      window.pageYOffset + nextSection.getBoundingClientRect().top - 1000
    );

  window.addEventListener("scroll", () => {
    section7Timeline.seek(window.pageYOffset);
  });
});
