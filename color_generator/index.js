var refreshBtn = document.querySelector(".refreshBtn");
var automateBtn = document.querySelector(".automate");
var color_container = document.querySelector(".color-container");
var timer;

for (let index = 0; index < 30; index++) {
    var pallete = document.createElement("div");
    var pallete_span = document.createElement("span");
    pallete_span.innerHTML = "#000";
    pallete.appendChild(pallete_span)
    color_container.appendChild(pallete)
    pallete.classList.add("pallete")
}
var generateRgb = () =>{
    return "rgb("+Math.ceil(Math.random()*251)+","+Math.ceil(Math.random()*251)+","+Math.ceil(Math.random()*251)+")"
}

var generateHexCol = () => {

    var a_string = '0123456789abcdef';
    var color = '';
    for(let i = 0 ; i<6 ; i++){
        var random = Math.floor(Math.random()*a_string.length);
        color = color + a_string.substring(random,random+1);
    }    
    return color;
}

var beginProcess = () =>{
    for (let index = 0; index < color_container.children.length; index++) {
        const code = generateHexCol();
        const element = color_container.children[index];
        element.style.backgroundColor = `#${code}`;
        element.firstChild.innerHTML = `#${code}`
    }
}
refreshBtn.addEventListener("click",()=>{
    beginProcess();
    if (timer) {
        clearInterval(timer);
        automateBtn.removeAttribute("disabled")
        timer = undefined;
    }
});

automateBtn.addEventListener("click",()=>{
     timer = setInterval(() => {
        beginProcess()
    }, 1500);
    automateBtn.setAttribute("disabled","true");
})