const btnEl = document.querySelector(".btn");
const btn2 = document.querySelector(".btn:last-of-type");

btnEl.addEventListener("mouseover",(event)=>{
    btnEl.style.setProperty("--rippleColor","rgb("+Math.ceil(Math.random()*250)+","+Math.ceil(Math.random()*250)+","+Math.ceil(Math.random()*250)+")")
     x_offset = event.pageX - btnEl.offsetLeft;
    const y_offset = event.pageY - btnEl.offsetTop;
    btnEl.style.setProperty("--xPos", x_offset + "px");
    btnEl.style.setProperty("--yPos", y_offset + "px")
});
btn2.addEventListener("mouseover", (ev)=>{
    const x_axis = ev.pageX - btn2.offsetLeft;
    const y_axis = ev.pageY - btn2.offsetTop;
    btn2.style.setProperty("--topRoll",y_axis + "px");
    btn2.style.setProperty("--leftRoll",x_axis + "px");
})