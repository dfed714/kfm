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

// LOADING SCREEN 
let loadingCount = 0;
function loadingScreen() {
    if(!sessionStorage.getItem("loaded")) {
        sessionStorage.setItem("loaded", true);
        function loading() {
            loadingCount++
            if (loadingCount >= 3) {
                content.classList.remove("display-none");
                loadingPage.classList.add("display-none");
            }
        };
        console.log(loadingCount);
        setInterval(loading, 1000);
        clearInterval();
    } else {
        loadingPage.classList.add("display-none");
        content.classList.remove("display-none");
    }
}

window.addEventListener("load", loadingScreen);

// MENU 

hamburger.addEventListener("click", hamburgerFunc);

let menuCount = 0;

function hamburgerFunc() {
    menu.classList.remove("display-none");
    function menuFunc() {
        menuCount++;
        if (menuCount > 0 && !menu.classList.contains("display-none")) {
            content.classList.add("display-none");
            footer.classList.add("display-none");
        } 
    };
    console.log(menuCount);
    setInterval(menuFunc, 100);
}

xOut.addEventListener("click", function() {
    menu.classList.add("display-none");
    content.classList.remove("display-none");
    footer.classList.remove("display-none");
})
