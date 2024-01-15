import './custom-select.js'

const mainPageSwiper = new Swiper(".main-page .swiper", {
  allowTouchMove: false,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
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

const sidebarMenus = document.querySelectorAll(".sidebar__menu");

sidebarMenus.forEach((sidebarMenu) => {
  sidebarMenu.addEventListener("click", (event) => {
    const isToggler = event.target.classList.contains("sidebar__menu-list-item-toggler");
    if (isToggler) {
      event.target.parentElement.classList.toggle("active");
    }
  });
});

const headerCatalogBurger = document.querySelector(".header__catalog-burger");
const footerCatalogBurger = document.querySelector(".footer__buttons .button_burger");

const sidebarMenu = document.querySelector(".sidebar__menu");
const headerNav = document.querySelector(".header__nav");


headerCatalogBurger.addEventListener("click", () => {
  sidebarMenu.classList.toggle("active");
  headerCatalogBurger.classList.toggle("active");
  document.body.classList.toggle("active");
  headerNav.classList.remove("active");
  footerCatalogBurger.classList.remove("active");
});

footerCatalogBurger.addEventListener("click", () => {
  headerNav.classList.toggle("active");
  footerCatalogBurger.classList.toggle("active");
  document.body.classList.toggle("active");
  sidebarMenu.classList.remove("active");
  headerCatalogBurger.classList.remove("active");
});
