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
