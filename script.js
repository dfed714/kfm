const navbar = document.querySelector(".kfm-logo");
const section1Text = document.querySelector(".section1-text");
const slogan = document.querySelector(".slogan");

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

function loading() {
    document.querySelector(".loading-page").classList.add("display-none");
    document.querySelector(".content").classList.remove("display-none");
}

window.setTimeout(loading, 5000);