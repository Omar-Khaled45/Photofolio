const scrollTop = document.querySelector(".scroll-top");
const header = document.getElementById("header");

window.onscroll = () => {
  if (window.scrollY >= 100) {
    // Add Active Class Scroll To Top Button
    scrollTop.classList.add("active");

    // Add Scrolled Class To Header
    header.classList.add("scrolled");
  } else {
    // Remove Active Class Scroll To Top Button
    scrollTop.classList.remove("active");

    // Remove Scrolled Class To Header
    header.classList.remove("scrolled");
  }
};

// Scroll To Top On Click
scrollTop.onclick = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
// Toggle Menu Mobile Screen
const toggleMenu = document.querySelector("#header .toggle-menu");
const navBar = document.querySelector("#header .navbar");

toggleMenu.addEventListener("click", () => {
  // Change Toggle Menu Icon On Click
  toggleMenu.classList.toggle("clicked");

  // Show Nav Bar On Click on Toggle Menu Button
  navBar.classList.toggle("show");

  if (toggleMenu.classList.contains("clicked")) {
    dropdownButton.classList.remove("clicked");
    dropdownButton.classList.remove("active");
    subMenu.classList.remove("show");
  }
});

// Sub Menu Show
const dropdownButton = document.querySelector(
  "#header .navbar .dropdown .nav-link"
);
const subMenu = document.querySelector("#header .navbar .dropdown .sub-menu");

dropdownButton.addEventListener("click", () => {
  dropdownButton.classList.toggle("clicked");
  dropdownButton.classList.toggle("active");
  subMenu.classList.toggle("show");
});

// Swiper Initiate
const swiper = new Swiper(".testimonials-swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 1,
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
