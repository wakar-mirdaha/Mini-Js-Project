const counter = document.querySelector('#counter');
const increase = document.querySelector('#increase');
const reset = document.querySelector('#reset');
const decrease = document.querySelector('#decrease');

let count = 0;


function updateDisplay() {
    counter.textContent = count;
    
  
    if (count > 0) {
        counter.style.color = "#22c55e"; 
    } else if (count < 0) {
        counter.style.color = "#ef4444"; 
    } else {
        counter.style.color = "#ffffff";    
    }
    
    console.log(count);
}

increase.addEventListener('click', () => {
    count++;
    updateDisplay();
});

decrease.addEventListener('click', () => {
    count--;
    updateDisplay();
});

reset.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});