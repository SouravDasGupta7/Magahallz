const menuIcon = document.getElementById("menu-icon");
const mobileMenu = document.getElementById("mobile-menu");

menuIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
});
var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 2500,   // 2.5 seconds per slide
        disableOnInteraction: false, // keeps autoplay running after drag
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
});
