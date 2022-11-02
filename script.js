//Enable hidden nav bar //

const nav = document.querySelector(".global-navbar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
if (lastScrollY < window.scrollY){
nav.classList.add("nav--hidden");
} else {
nav.classList.remove("nav--hidden");
}
lastScrollY = window.scrollY;
});

//Scroll to About Section
