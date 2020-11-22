

const imgBx = document.querySelector('.imgBx')
const slides = imgBx.getElementsByTagName('img');
let i = 0;

function nextSlide(){
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active')
}
function prevSlide(){
    slides[i].classList.remove('active');
    i = (i - 1 + slides.length) % slides.length;
    slides[i].classList.add('active')
}