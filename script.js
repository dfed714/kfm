const navbar = document.querySelector(".kfm-logo");
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
const getInTouch = document.querySelector(".section1-btn");
const xOutModal = document.querySelector(".x-out-modal");
const getInTouchModal = document.querySelector(".contact-modal");
const section1Text = document.querySelector(".section1-text");
const section1Img = document.querySelector(".section1-image");
const topList = document.querySelector(".top-list");
const banner = document.querySelector(".banner");

// LOADING SCREEN

let loadingCount = 0;
let loadingInterval = setInterval(loading, 1000);

function loading() {
  loadingCount++;
  if (loadingCount >= 3) {
    loadingPage.classList.add("display-none");
    clearInterval(loadingInterval);
  }
}

function loadingScreen() {
  if (!sessionStorage.getItem("loaded")) {
    sessionStorage.setItem("loaded", true);
  } else {
    loadingPage.classList.add("display-none");
  }
}

window.addEventListener("load", loadingScreen);

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

xOut.addEventListener("click", function () {
  if (window.innerWidth < 900) {
    menu.classList.add("display-none");
    enableScrolling();
  } else {
    menu.classList.add("display-none");
  }
});

// GET IN TOUCH MODAL

getInTouch.addEventListener("click", function () {
  window.scrollTo(
    0,
    banner.getBoundingClientRect().top + (window.innerHeight / 100) * 6.25
  );
});
