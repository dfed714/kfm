const navbar = document.querySelector(".kfm-logo");
const section1Text = document.querySelector(".section1-text");
const slogan = document.querySelector(".slogan");

function homeTextPadding() {
    if (slogan.getBoundingClientRect().y < (navbar.offsetHeight + navbar.getBoundingClientRect().y + 10) && screen.height > 280) {
        console.log("now");
        slogan.style.marginTop = `${(navbar.offsetHeight + navbar.getBoundingClientRect().y + 10)}px`;
    } else if (slogan.getBoundingClientRect().y < (navbar.offsetHeight + navbar.getBoundingClientRect().y + 10) && screen.height <= 280) {
        slogan.style.marginTop = `${(navbar.offsetHeight + navbar.getBoundingClientRect().y + 75)}px`;
    }
};
homeTextPadding();

screen.orientation.addEventListener("change", function() {
    location.reload();
})