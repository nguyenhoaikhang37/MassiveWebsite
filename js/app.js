const menuScroll = document.querySelector('.menu-scroll');
const menuBar = document.querySelector('.menu-scroll .menu-icon');
const menuClick = document.querySelector('.menu-click');

window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;

  if (window.innerWidth > 1280) {
    if (scrollHeight > 50) {
      menuScroll.style.transform = 'translateX(0%)';
    } else {
      menuScroll.style.transform = 'translateX(-100%)';
    }
  }
});

menuBar.addEventListener('click', () => {
  // menuClick.style.transform = "translateX(0%)";
  menuClick.classList.toggle('show-menu');
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  var dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}

//> Loading
var pre = document.querySelector('#tb-preloader');

function myFunc() {
  pre.style.display = 'none';
}

window.addEventListener('load', setTimeout(myFunc, 3000)); //3500
