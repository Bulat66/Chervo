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

    lines[1].classList.toggle('cross-1');
    lines[0].classList.toggle('cross-0');
    lines[2].classList.toggle('cross-2');
}

// DOWNLOAD BTN
let btnDownloadArray = document.getElementsByClassName('btn-download');
for(let i = 0; i < btnDownloadArray.length; i++){
    btnDownloadArray[i].addEventListener('click', () => {
        var link = document.createElement('a');
    link.download = 'карта партнера'; // Установите имя файла для скачивания
    link.href = 'https://disk.yandex.ru/i/lnTV9kZVVmhVug'; // Установите путь к файлу для скачивания
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    })
}
// document.getElementById('downloadButton').addEventListener('click', function() {
//     // Создаем ссылку для загрузки файла
//     var link = document.createElement('a');
//     link.download = 'карта партнера'; // Установите имя файла для скачивания
//     link.href = 'https://disk.yandex.ru/i/lnTV9kZVVmhVug'; // Установите путь к файлу для скачивания
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
// });