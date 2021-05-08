const menuScroll = document.querySelector('.menu-scroll');
const menuBar = document.querySelector('.menu-scroll .menu-icon');
const menuClick = document.querySelector('.menu-click');
const menus = document.querySelectorAll('.menu-click ul li a');

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

for (let i = 0; i < menus.length; i++) {
  menus[i].onclick = function () {
    menuClick.classList.remove('show-menu');
  };
}

window.onscroll = function (event) {
  let progressBars = document.getElementsByClassName('progress__bar');
  Array.from(progressBars).forEach(bar => {
    let windowTop = window.scrollY;
    let windowBot = windowTop + window.innerHeight;
    let eleTop = bar.offsetTop - 20;
    let eleBot = eleTop + bar.clientHeight;

    if (windowTop > 1000) {
      bar.classList.add('active');
    }
  });
};

//> Loading
var pre = document.querySelector('#tb-preloader');

function myFunc() {
  pre.style.display = 'none';
}
window.addEventListener('load', myFunc); //3500
