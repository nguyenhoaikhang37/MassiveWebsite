const menuScroll = document.querySelector(".menu-scroll");
const menuBar = document.querySelector(".menu-scroll .menu-icon");
const menuClick = document.querySelector(".menu-click");

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;

  if (window.innerWidth > 1280) {
    if (scrollHeight > 50) {
      menuScroll.style.transform = "translateX(0%)";
    } else {
      menuScroll.style.transform = "translateX(-100%)";
    }
  }
});

menuBar.addEventListener("click", () => {
  // menuClick.style.transform = "translateX(0%)";
  menuClick.classList.toggle("show-menu");
});

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

//>ProcessBar
window.onscroll = function (event) {
  let progressBars = document.getElementsByClassName("progress__bar");
  Array.from(progressBars).forEach((bar) => {
    // console.dir(bar)

    // window.scrollY: current scroll Position
    // window.innerHeight: visible viewport height (not full html height)
    // ele.offsetTop: length from top of page to element
    // ele.clientHeight: height of element

    let windowTop = window.scrollY;
    let windowBot = windowTop + window.innerHeight;

    // scroll when reach number "70%, 80%, 90%, ..." => minus about 20px
    let eleTop = bar.offsetTop - 20;
    let eleBot = eleTop + bar.clientHeight;
    console.log(windowTop);
    // If position of scrolling is in the range of visible element => true
    //eleBot <= windowBot && eleTop >= windowTop
    if (windowTop > 1000) {
      bar.classList.add("active");
    }
  });
};
