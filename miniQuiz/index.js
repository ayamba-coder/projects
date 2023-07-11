// Generate random number
const generateRandom = () =>{
    return Math.ceil(Math.random() * 50);
}
// Initialise all inputs outputs
let firstspace = document.querySelector(".values:first-of-type");
let lastspace = document.querySelector(".values:last-of-type");
firstspace.innerHTML = generateRandom();
lastspace.innerHTML = generateRandom();
const score = document.getElementById("score");
const user_answer = +document.getElementById("answer").value;

const submitAnswer = () =>{
    console.log(typeof user_answer);
    const system_answer= firstspace.innerHTML * lastspace.innerHTML;
    if(answer == system_answer){
        score.innerHTML = score.innerText + 1;
        // Store score to local storage
    }else{
        score.innerText > 0 ? score.innerHTML = score.innerHTML - 1 : score.style.color='red';
        // Reduce scores by 1 only if scores != 0
    }
    // Refresh spaces with new values
    firstspace.innerHTML = generateRandom();
    lastspace.innerHTML = generateRandom();
    document.getElementById('answer').value = ''
}