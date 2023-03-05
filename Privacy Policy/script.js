const navbar = document.querySelector(".kfm-logo");
const menu = document.querySelector(".menu");
const xOut = document.querySelector(".x-out");
const hamburger = document.querySelector(".hamburger-icon");
const homeBtn = document.querySelector(".home-btn");
const content = document.querySelector(".content");
const footer = document.querySelector(".footer");
const part2 = document.querySelector(".part-2");
const part3 = document.querySelector(".part-3");
const part4 = document.querySelector(".part-4");
const part5 = document.querySelector(".part-5");
const part6 = document.querySelector(".part-6");
const part7 = document.querySelector(".part-7");
const part8 = document.querySelector(".part-8");
const part9 = document.querySelector(".part-9");


// DISABLE SCROLLING 

function disableScrolling() {
    document.documentElement.style.overflowY = "clip";
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