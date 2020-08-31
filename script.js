var dots = document.getElementById("dots");
var moreText = document.getElementById("more");
var btnText = document.getElementById("myBtn");

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