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
let navbar = document.getElementsByClassName('type-a-nav');

// NAVIGATION BUTTON STYLE
let lines = document.getElementsByClassName('menu-style');

menuBtn.onclick = () => {
    navbar[0].classList.toggle('type-a-active-nav');

    lines[1].classList.toggle('cross-1');
    lines[0].classList.toggle('cross-0');
    lines[2].classList.toggle('cross-2');
}

// DOWNLOAD BTN
document.getElementById('downloadButton').addEventListener('click', function() {
    // Создаем ссылку для загрузки файла
    var link = document.createElement('a');
    link.download = 'карта партнера'; // Установите имя файла для скачивания
    link.href = 'https://disk.yandex.ru/i/lnTV9kZVVmhVug'; // Установите путь к файлу для скачивания
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// SHAKE
let type_c_child_img = document.getElementsByClassName('type-c-child-img');
let element = type_c_child_img[0];
let element_2 = type_c_child_img[1];
let element_3 = type_c_child_img[2]; 

console.log(element.clientWidth);

function shake(){
    let rotation = 0;
    let cycles = 3;
    let degree = 15;
    let direction = 1;

    function shake_move(){
        rotation = direction * degree;
        
        element.style.transform = `rotate(${rotation}deg)`;
            direction *= -1;
            cycles--;
            if (cycles <= 0) { setTimeout(width_grow, 500)};
        
    }


    function width_grow(a,b,c){
        
        element.style.width = 0 + `px`;
        // element.style.display = 'none'

        element_2.style.width = 100 + `px`;
        element_3.style.width = 100 + `px`;

        // element_2.style.display = 'block'
        // element_3.style.display = 'block'

        function width_grow_back(a,b,c){
            element.style.width = 100 + `px`;
            // element.style.display = 'block'

            element_2.style.width = 0 + `px`;
            element_3.style.width = 0 + `px`;

            // element_2.style.display = 'none'
            // element_3.style.display = 'none'
            shake();
        }
        setTimeout(width_grow_back, 5000);
    }

    function shake_move_cycle(){
            shake_move();
            
            setTimeout(() => {
                shake_move();
                setTimeout(shake_move, 500);
            }, 500);
    }
    shake_move_cycle();
}

    shake();
