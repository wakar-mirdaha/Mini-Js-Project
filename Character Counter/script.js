const textareaEl = document.getElementById("textarea");
const totalCounter = document.getElementById("total-counter");
const RemainingCounter = document.getElementById("remaining-counter");

let  maxlength = textareaEl.getAttribute("maxLength");



textareaEl.addEventListener('keyup', ()=>{
    updateCounter();
    if(RemainingCounter.innerText === "0"){
        alert('You have reached max character limit')
    }
});

updateCounter()

function updateCounter(){
   totalCounter.innerText = textareaEl.value.length
   RemainingCounter.innerText = maxlength - textareaEl.value.length;
}