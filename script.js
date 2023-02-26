const navbar = document.querySelector(".kfm-logo");
const section1Text = document.querySelector(".section1-text");
const slogan = document.querySelector(".slogan");

function homeTextPadding() {
    if (slogan.getBoundingClientRect().y < (navbar.offsetHeight + navbar.getBoundingClientRect().y + 5)) {
        slogan.style.marginTop = `${(navbar.offsetHeight + navbar.getBoundingClientRect().y + 10)}px`;
    }
};
homeTextPadding();

screen.orientation.addEventListener("change", function(e) {
    location.reload();
})