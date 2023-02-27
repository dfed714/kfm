const navbar = document.querySelector(".kfm-logo");
const section1Text = document.querySelector(".section1-text");
const slogan = document.querySelector(".slogan");
const loadingPage = document.querySelector(".loading-page");
const menu = document.querySelector(".menu");
const xOut = document.querySelector(".x-out");
const hamburger = document.querySelector(".hamburger-icon");
const homeBtn = document.querySelector(".home-btn");
const content = document.querySelector(".content");
const footer = document.querySelector(".footer");
const section2 = document.querySelector(".section2");
const loadingImg = document.querySelector(".loading-img");

// LOADING SCREEN 
let loadingCount = 0;

function loading() {
    loadingCount++
    if (loadingCount >= 3) {
        content.classList.remove("display-none");
        loadingPage.classList.add("display-none");
        clearInterval(loadingInterval);
    }
};

let loadingInterval = setInterval(loading, 1000);

function loadingScreen() {
    if(!sessionStorage.getItem("loaded")) {
        sessionStorage.setItem("loaded", true);
    } else {
        loadingPage.classList.add("display-none");
        content.classList.remove("display-none");
    }
}

window.addEventListener("load", loadingScreen);

// MENU 

hamburger.addEventListener("click", hamburgerFunc);

function hamburgerFunc() {
    if (window.innerWidth < 900) {
        menu.classList.remove("display-none");
        section2.classList.add("display-none");
        footer.classList.add("display-none");
    } else {
        menu.classList.remove("display-none");
    }
}

xOut.addEventListener("click", function() {
    if (window.innerWidth < 900) {
        menu.classList.add("display-none");
        section2.classList.remove("display-none");
        footer.classList.remove("display-none");
    } else {
        menu.classList.add("display-none");
    }
})
