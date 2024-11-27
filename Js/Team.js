var swiper = new Swiper(".swiper", {
  grabCursor: true,
  initialSlide: 4,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 10,
  speed: 1000,
  freeMode: false,
  mousewheel: {
    thresholdDelta: 30,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  on: {
    click(event) {
      swiper.slideTo(this.clickedIndex);
    },
  },
});
