var Logo = document.querySelector(".navbar-brand");
var cpDate = document.querySelector(".copyrightDate");
var linker = document.querySelector(".downloadBtn")
var slogans = "Eat,Code,Sleep,Repeat";

var charIndex = 0;
var date = new Date();

function animateSlogan() {
    Logo.innerText = slogans.slice(0,charIndex + 1);
    charIndex++;
    if (charIndex == slogans.length) {
        charIndex = 0;
    }
}
function dwnload(){
    fetch('')
   // check to make sure I didn't have an unexpected failure (may need to check other things here depending on use case / backend)
  .then(resp => resp.status === 200 ? resp.blob() : Promise.reject('something went wrong'))
  .then(blob => {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    // the filename you want
    a.download = 'Resume_Darius.pdf';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    alert("Thanks for downloading,waiting to work with you"); 
  })
  .catch(() => alert('oh no!'));
}

linker.addEventListener("click",()=>{
    dwnload();
})
cpDate.innerText = date.getFullYear()
setInterval(animateSlogan, 140);
