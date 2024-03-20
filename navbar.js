// Navbar
let hamburger = document.querySelector('.hamburger')
let menu = document.querySelector('.navMenu')
let logo = document.querySelector('.logo')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle('active')
    logo.classList.toggle('active')
})


// For Sticky Navbar
function handleScroll() {
    let header = document.querySelector('header');
    header.classList.toggle('active', window.scrollY > 0);
}
window.addEventListener('resize', function () {
    if (window.innerWidth > 1200) {
        window.removeEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleScroll);
    } else {
        window.removeEventListener('scroll', handleScroll);
    }
});


// Hero-Section Carousel
var swiper = new Swiper(".myCarSwiper", {
    slidesPerView: "1",
    // cssMode: true,
    // spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});