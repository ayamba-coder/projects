const hourElement = document.querySelector(".box:first-of-type >h4")
const minuteElement = document.querySelector(".box:nth-of-type(2) > h4");
const secondsElement = document.querySelector(".box:nth-of-type(3) > h4");
const AmPm = document.querySelector(".container > span");

const updateClock = () => {
    let h = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    
    h = h < 10 ? "0"+h : h
    min = min < 10 ? "0"+min : min
    sec = sec < 10 ? "0"+sec : sec
    hourElement.innerHTML = h;
    minuteElement.innerHTML = min;
    secondsElement.innerHTML = sec;
    if(h > 12){
        AmPm.innerHTML = "PM"
        return "PM"
    }

}
try {
    updateClock() == "PM" ? (document.querySelector("body").style.backgroundImage = "url(https://images.unsplash.com/photo-1523590564318-491748f70ea7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)") && (document.querySelector("body").style.backgroundPosition = "center"): (document.querySelector("body").style.backgroundImage = "url(https://images.unsplash.com/photo-1433477077279-9354d2d72f6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1488&q=80)") && (document.querySelector("body").style.backgroundPosition = "center")
} catch (error) {
    console.log(error);
}
setInterval(() => {
    updateClock();
}, 1000);


let somevar ;
function test()
{
    
}
console.log(somevar);
somevar = 7;
test()
