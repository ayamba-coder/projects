var Logo = document.querySelector(".navbar-brand");
var cpDate = document.querySelector(".copyrightDate");
var slogans = "Eat Sleep Code Repeat";

var charIndex = 0;
var date = new Date();

function animateSlogan() {
    Logo.innerText = slogans.slice(0,charIndex + 1);
    charIndex++;
    if (charIndex == slogans.length) {
        charIndex = 0;
    }
}
cpDate.innerText = date.getFullYear()
setInterval(animateSlogan, 140);