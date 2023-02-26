const navbar = document.querySelector(".kfm-logo");
const section1Text = document.querySelector(".section1-text");
const slogan = document.querySelector(".slogan");
const loadingPage = document.querySelector(".loading-page");
const menu = document.querySelector(".menu");
const xOut = document.querySelector(".x-out");
const hamburger = document.querySelector(".hamburger-icon");
const homeBtn = document.querySelector(".home-btn");
const content = document.querySelector(".content");

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

hamburger.addEventListener("click", function() {
    menu.classList.remove("display-none");
})

xOut.addEventListener("click", function() {
    menu.classList.add("display-none");
})
