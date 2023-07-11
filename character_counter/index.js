const textArea = document.querySelector('textarea');
const char_T = document.getElementById('char_t');
const char_R = document.getElementById('char_r');

// What is a better approach?, wrap event handler in a function or a function in handler. I think the latter is best. Am just too Lazy :)

(function(){
    textArea.addEventListener("keyup",()=>{
        char_T.innerHTML = textArea.textLength;
        char_R.innerHTML = textArea.maxLength - textArea.textLength
        if(char_R.innerHTML == 0){
            char_R.style.color = 'red'
        }
    })
})();

// Getting used to anonymous functions(IIFE(Imediately Invoked function Expression)