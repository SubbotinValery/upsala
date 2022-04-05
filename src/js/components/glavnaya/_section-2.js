document.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector(".section-2");

  const videoWrapper = section.querySelector(".video__wrapper");
  const videoText = section.querySelector(".video__text");
  const video = section.querySelector(".video");

  if (videoWrapper !== null) {
    videoWrapper.addEventListener("click", () => {
      if (videoWrapper.className.match(/\bpause\b/)) {
        videoWrapper.classList.remove("pause");
        video.controls = true;
        video.play();
      } else {
        videoWrapper.classList.add("pause");
        video.controls = false;
        video.pause();
      }
    });
  }

  const section2Timeline = anime
    .timeline({ autoplay: false })
    .add({
      delay: window.pageYOffset + section.getBoundingClientRect().top - 500,
      targets: videoWrapper,
      bottom: ["-100%", "50%"],
      translateY: ["50%", "50%"],
      opacity: {
        value: [0, 1],
        delay: 200,
      },
      duration: 600,
      easing: "linear",
    })
    .add({
      targets: videoText,
      bottom: ["-100%", "50%"],
      translateY: ["50%", "50%"],
      opacity: [0, 1],
      duration: 600,
      easing: "linear",
    })
    .add({
      targets: videoWrapper,
      bottom: "200%",
      duration: 600,
      easing: "linear",
    })
    .add({
      targets: videoText,
      bottom: "200%",
      duration: 600,
      easing: "linear",
    });

  if (window.innerWidth > 768) {
    window.addEventListener("scroll", () => {
      section2Timeline.seek(window.pageYOffset);
    });
  }
});
