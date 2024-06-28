// SLIDER

let slider = document.getElementById('slider');
let slides = document.getElementsByClassName('slide');

let currentSlide = 0;

function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active-slide');
}
function nextSlide() {
    showSlide(currentSlide + 1);
}
let intervalId = setInterval(nextSlide, 5000);


// NAVIGATION ADAPTIVE

let menuBtn = document.getElementById('menu-btn');
let navbar = document.getElementById('nav');

// NAVIGATION BUTTON STYLE

let lines = document.getElementsByClassName('menu-style');

menuBtn.onclick = () => {
    navbar.classList.toggle('active-nav');
    navbar.classList.toggle('fa-times');

    lines[1].classList.toggle('cross-1');
    lines[0].classList.toggle('cross-0');
    lines[2].classList.toggle('cross-2');
}