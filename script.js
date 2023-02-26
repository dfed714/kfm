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
    document.querySelector(".loading-page").style.display = "none";
    document.querySelector(".content").style.opacity = "1";
}

window.setTimeout(loading, 5000);