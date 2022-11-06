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

//Hamburger JS
const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function(){
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});

//Auto-scroll to about
document.getElementById('aboutid').addEventListener('click',() => {
    window.scrollTo(1222,document.body.scrollHeight);
})


//Video Background
let videos = [];

videos[0] = ['arialviewfinal.mp4']

let index = 0;
const vidElement = document.querySelector('video-wrapper-hidable-playing');

function change() {
    vidElement.src = videos[index];
    index >1 ? index = 0 : index++;
}

window.onload = function() {
    setInterval(change, 5000);
};

