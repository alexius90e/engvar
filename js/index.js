const mainPageSwiper = new Swiper(".main-page .swiper", {
  allowTouchMove: false,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});

const navMenuItems = document.querySelectorAll(".nav-menu__item");

navMenuItems.forEach((navMenuItem, index) => {
  navMenuItem.addEventListener("click", (event) => {
    navMenuItems.forEach((item) => item.classList.remove("active"));
    event.currentTarget.classList.add("active");
    mainPageSwiper.slideTo(index);
  });
});
