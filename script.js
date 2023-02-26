const navbar = document.querySelector(".kfm-logo");
const section1Text = document.querySelector(".section1-text");
const slogan = document.querySelector(".slogan");
const loadingPage = document.querySelector(".loading-page");

// GALAXY FOLD RESPONSIVE 

function homeTextPadding() {
    if (slogan.getBoundingClientRect().y < (navbar.offsetHeight + navbar.getBoundingClientRect().y + 10) && screen.height <= 280) {
        slogan.style.marginTop = `${(navbar.offsetHeight + navbar.getBoundingClientRect().y + 10)}px`;
    } 
};
homeTextPadding();

screen.orientation.addEventListener("change", function() {
    location.reload();
    homeTextPadding();
})

// LOADING SCREEN 

// function loading() {
//     document.querySelector(".content").classList.remove("display-none");
//     loadingPage.classList.add("display-none");
// }

setTimeout(() => loadingPage.style.background = "red", 5000);