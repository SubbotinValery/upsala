import Splide from "../vendor/splide.min";

const chtoVRezultateSliderPrev = document.querySelector(
  "#chto-v-rezultate-slider-controls .slider__arrow-prev"
);
const chtoVRezultateSliderNext = document.querySelector(
  "#chto-v-rezultate-slider-controls .slider__arrow-next"
);

const chtoVRezultateSlider = new Splide("#chto-v-rezultate-slider", {
  arrows: false,
  perPage: 2,
  type: "loop",
  pagination: true,
  gap: "6.4rem",
}).mount();

chtoVRezultateSlider.on("move", function () {
  var slides = document.querySelectorAll(
    "#chto-v-rezultate-slider .splide__slide"
  );

  slides.forEach(function (slide) {
    slide.classList.add("is-visible");
  });
});

chtoVRezultateSliderPrev.addEventListener("click", function (e) {
  chtoVRezultateSlider.go("<");
});

chtoVRezultateSliderNext.addEventListener("click", function (e) {
  chtoVRezultateSlider.go(">");
});

//KULTURNII PRODUCTI

const kulturniiProductiSliderPrev = document.querySelector(
  "#kulturnii-producti-slider-controls .slider__arrow-prev"
);
const kulturniiProductiSliderNext = document.querySelector(
  "#kulturnii-producti-slider-controls .slider__arrow-next"
);

const kulturniiProductiSlider = new Splide("#kulturnii-producti-slider", {
  arrows: false,
  perPage: 1,
  type: "loop",
  pagination: true,
}).mount();

chtoVRezultateSlider.on("move", function () {
  var slides = document.querySelectorAll(
    "#kulturnii-producti-slider .splide__slide"
  );

  slides.forEach(function (slide) {
    slide.classList.add("is-visible");
  });
});

kulturniiProductiSliderPrev.addEventListener("click", function (e) {
  chtoVRezultateSlider.go("<");
});

kulturniiProductiSliderNext.addEventListener("click", function (e) {
  chtoVRezultateSlider.go(">");
});
