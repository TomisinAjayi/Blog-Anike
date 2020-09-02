var dots = document.querySelector(".dots");
var moreText = document.querySelector(".more");
var btnText = document.querySelector(".myBtn");

function readMore() {
    if(dots.style.display === "none"){
        dots.style.display = "inline";
        btnText.innerHTML = "Continue Reading";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Less";
        moreText.style.display = "inline";
    }
}