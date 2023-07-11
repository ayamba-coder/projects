var nav = document.querySelector('nav');
var img = document.querySelector('.banner');
var description = document.querySelector('.description');
var bannerHeight = description.offsetTop - nav.offsetHeight

window.addEventListener("scroll",function(){
    if (window.scrollY > bannerHeight) {
        nav.classList.add('theme')
    }else{
        nav.classList.remove('theme')
    }
})