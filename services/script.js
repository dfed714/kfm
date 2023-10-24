const navbar = document.querySelector(".kfm-logo");
const menu = document.querySelector(".menu");
const xOut = document.querySelector(".x-out");
const hamburger = document.querySelector(".hamburger-icon");
const homeBtn = document.querySelector(".home-btn");
const content = document.querySelector(".content");
const footer = document.querySelector(".footer");
const xOutModal = document.querySelectorAll(".x-out-modal");
const modals = document.querySelectorAll(".modal");
const icons = document.querySelectorAll(".icon")
const topList = document.querySelector(".top-list");

// DISABLE SCROLLING 

function disableScrolling() {
    document.documentElement.style.overflowY = "hidden";
}

// ENABLE SCROLLING 

function enableScrolling() {
    document.documentElement.style.overflowY = "auto";
}

// MENU 

hamburger.addEventListener("click", hamburgerFunc);

function hamburgerFunc() {
    if (window.innerWidth < 900) {
        menu.classList.remove("display-none");
        disableScrolling();
    } else {
        menu.classList.remove("display-none");
    }
}

xOut.addEventListener("click", function() {
    if (window.innerWidth < 900) {
        menu.classList.add("display-none");
        enableScrolling();
    } else {
        menu.classList.add("display-none");
    }
});

// GET IN TOUCH MODAL 

icons.forEach(x => x.addEventListener("click", function(e) {
    let theModal = "";
    if (e.target.nodeName == "DIV") {
        theModal += e.target.nextElementSibling.textContent;
        
    } else {
        theModal += e.target.parentElement.nextElementSibling.textContent;
    }
    disableScrolling();
    content.style.pointerEvents = "none";
    document.querySelector(`.${theModal.split(" ").join("-")}`).classList.remove("display-none");
}));

xOutModal.forEach(x => x.addEventListener("click", function() {
    enableScrolling();
    modals.forEach(x => x.classList.add("display-none"));
    content.style.pointerEvents = "auto";
}));
