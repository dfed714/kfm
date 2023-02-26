const navbar = document.querySelector(".kfm-logo");
const section1Text = document.querySelector(".section1-text");
const slogan = document.querySelector(".slogan");

function homeTextPadding() {
    // if (slogan.getBoundingClientRect().y < (navbar.offsetHeight + navbar.getBoundingClientRect().y + 10) && screen.height > 280 && screen.height < screen.width) {
    //     slogan.style.marginTop = `${(navbar.offsetHeight + navbar.getBoundingClientRect().y + 5)}px`;
    // } else if (slogan.getBoundingClientRect().y < (navbar.offsetHeight + navbar.getBoundingClientRect().y + 10) && screen.height <= 280 && screen.height < screen.width) {
    //     slogan.style.marginTop = `${(navbar.offsetHeight + navbar.getBoundingClientRect().y + 75)}px`;
    // }
    if (screen.width > screen.height) {
        slogan.style.color = "red";
    }
};
homeTextPadding();

screen.orientation.addEventListener("change", function() {
    location.reload();
    homeTextPadding();
})