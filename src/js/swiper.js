const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    481: {
      slidesPerView: 1,
    },

    769: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1281: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});
