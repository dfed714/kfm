const navbar = document.querySelector(".kfm-logo");
const section1Text = document.querySelector(".section1-text");
const slogan = document.querySelector(".slogan");
const loadingPage = document.querySelector(".loading-page");

// LOADING SCREEN 

let count = 0;
function loading() {
    count++
    if (count == 5) {
        document.querySelector(".content").classList.remove("display-none");
        loadingPage.classList.add("display-none");
    }
};
setInterval(loading, 1000);

