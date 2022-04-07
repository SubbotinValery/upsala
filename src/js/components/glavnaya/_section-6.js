document.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector(".section-6");

  if (section != null) {
    const cirkclerWrapper = section.querySelector(".cirkcler__wrapper");
    const cirkcler = section.querySelector(".cirkcler");

    const kacheliWrapper = section.querySelector(".kacheli__wrapper");
    const kacheliActorLeft = kacheliWrapper.querySelector(".actor-left");
    const kacheliActorRight = kacheliWrapper.querySelector(".actor-right");
    const kacheliActorBrevno = kacheliWrapper.querySelector(".brevno");

    const artistWrapper1 = section.querySelector(".artist__wrapper-1");
    const artistWrapper2 = section.querySelector(".artist__wrapper-2");
    const artistWrapper3 = section.querySelector(".artist__wrapper-3");
    const artistAll = section.querySelectorAll(".artist");

    const section6Timeline = anime
      .timeline({ autoplay: false })
      .add({
        delay: window.pageYOffset + section.getBoundingClientRect().top - 500,
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
          targets: cirkclerWrapper,
          bottom: "-50%",
          duration: 500,
          easing: "linear",
        },
        "+=200"
      );

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
      const topBorder =
        window.pageYOffset + section.getBoundingClientRect().top - 200;
      const bottomBorder =
        window.pageYOffset + section.getBoundingClientRect().bottom;

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

      section6Timeline.seek(window.pageYOffset);
    });
  }
});
