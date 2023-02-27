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
function loadingScreen() {
    if(!sessionStorage.getItem("loaded")) {
        sessionStorage.setItem("loaded", true);
        let count = 0;
        function loading() {
            count++
            if (count >= 3) {
                content.classList.remove("display-none");
                loadingPage.classList.add("display-none");
            }
        };
        setInterval(loading, 1000);
        } else {
            loadingPage.classList.add("display-none");
            content.classList.remove("display-none");
        }
}

window.addEventListener("load", loadingScreen);


// MENU 

hamburger.addEventListener("click", hamburgerFunc);

function hamburgerFunc() {
        menu.classList.remove("display-none");
        setTimeout(function() {
            content.classList.add("display-none");
            footer.classList.add("display-none");
        }, 500)
}

xOut.addEventListener("click", function() {
    menu.classList.add("display-none");
    content.classList.remove("display-none");
    footer.classList.remove("display-none");
})
