const navbar = document.querySelector(".kfm-logo");
const menu = document.querySelector(".menu");
const xOut = document.querySelector(".x-out");
const hamburger = document.querySelector(".hamburger-icon");
const homeBtn = document.querySelector(".home-btn");
const content = document.querySelector(".content");
const footer = document.querySelector(".footer");
const xOutModal = document.querySelector(".x-out-modal");
const getInTouchModal = document.querySelector(".contact-modal");
const topList = document.querySelector(".top-list");

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

// GET IN TOUCH MODAL 

// getInTouch.addEventListener("click", function() {
//     getInTouchModal.classList.remove("display-none");
//     content.style.pointerEvents = "none";
//     disableScrolling();
// })

// xOutModal.addEventListener("click", function() {
//     getInTouchModal.classList.add("display-none");
//     content.style.pointerEvents = "auto";
//     enableScrolling();
// })
