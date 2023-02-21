const content1Headline = document.querySelector(".content1-headline");
const content1Para= document.querySelector(".content1-para");
const content2Headline = document.querySelector(".content2-headline");
const content2Para= document.querySelector(".content2-para");
const content3Headline = document.querySelector(".content3-headline");
const content3Para= document.querySelector(".content3-para");

(function textBoxWidth() {
    content1Para.style.width = `${content3Headline.offsetWidth}px`;
    content2Para.style.width = `${content3Headline.offsetWidth}px`;
    content3Para.style.width = `${content3Headline.offsetWidth}px`;
})();