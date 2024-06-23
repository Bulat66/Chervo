let slider = document.getElementById('slider');
let slides = document.getElementsByClassName('slide');
//
//function sliderMove(e) {
//	for (let i = 0; i < slideA.length; i++) {
//			slideA[i].style.width = 0;
//			i += 1;
//			slideA[i].style.width = 100 + `px`;
//			setTimeout(sliderMove(e), 5000);
//	}
//}
//
//sliderMove(slideA);
//

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