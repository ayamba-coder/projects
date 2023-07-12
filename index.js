var nav = document.querySelector('nav');
var img = document.querySelector('.banner');
var card_container = document.querySelector('.card_container');
var bannerHeight = card_container.offsetTop - nav.offsetHeight
var bannerHeading = document.querySelector(".banner h1");
var personality = ['a web Developer','a Teacher','a Trainer']

window.addEventListener("scroll",function(){
    if (window.scrollY > bannerHeight) {
        nav.classList.add('theme')
    }else{
        nav.classList.remove('theme')
    }
});

var charCounter = 0;
var personalityCounter = 0

function animateWords(){
    bannerHeading.innerText = `I am ${personality[personalityCounter].slice(0,charCounter+1)}`;
    charCounter++;
    if (charCounter === personality[personalityCounter].length) {
        personalityCounter++;
        charCounter = 0;
    }
    if(personalityCounter === personality.length){
        personalityCounter=0
    }
}
setInterval(animateWords, 400);
