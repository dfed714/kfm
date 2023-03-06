const navbar = document.querySelector(".kfm-logo");
const menu = document.querySelector(".menu");
const xOut = document.querySelector(".x-out");
const hamburger = document.querySelector(".hamburger-icon");
const homeBtn = document.querySelector(".home-btn");
const content = document.querySelector(".content");
const footer = document.querySelector(".footer");
const topList = document.querySelector(".top-list");
const testimonials = document.querySelectorAll(".testimonial");
const rightBtn = document.querySelector(".right-btn");
const leftBtn = document.querySelector(".left-btn");

// DISABLE SCROLLING 

function disableScrolling() {
    document.documentElement.style.overflowY = "hidden";
}

// ENABLE SCROLLING 

function enableScrolling() {
    document.documentElement.style.overflowY = "auto";
}

// MENU 

hamburger.addEventListener("click", hamburgerFunc);

function hamburgerFunc() {
    if (window.innerWidth < 900) {
        menu.classList.remove("display-none");
        disableScrolling();
    } else {
        menu.classList.remove("display-none");
    }
}

xOut.addEventListener("click", function() {
    if (window.innerWidth < 900) {
        menu.classList.add("display-none");
        enableScrolling();
    } else {
        menu.classList.add("display-none");
    }
});

// slider 

leftBtn.addEventListener("click", function() {
    testimonials.forEach(x => console.log(new WebKitCSSMatrix(window.getComputedStyle(x).transform).m41));
})