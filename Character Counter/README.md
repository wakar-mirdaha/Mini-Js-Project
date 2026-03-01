# 📊 Real-Time Character Counter

A simple and responsive **Real-Time Character Counter** built using **HTML, CSS, and JavaScript**.  
This project dynamically counts the total number of characters typed in a textarea and displays the remaining characters based on a defined limit.

---
<img width="1900" height="926" alt="Screenshot 2026-03-01 135047" src="https://github.com/user-attachments/assets/07f3e210-c3db-43bd-ae22-66ed015a6366" />

## 🚀 Features

- ✨ Real-time character counting
- 📉 Displays remaining characters
- 🎨 Modern responsive UI
- ⚡ Lightweight and beginner-friendly
- 📱 Works on all screen sizes

---

## 🛠️ Built With

- **HTML5** – Structure  
- **CSS3** – Styling & Layout  
- **JavaScript (Vanilla JS)** – Functionality  

---
## 💡 How It Works

1. The user types inside the textarea.
2. JavaScript listens for the `input` event.
3. It calculates:
   - Total characters typed
   - Remaining characters (based on a maximum limit)
4. The values update instantly on the screen.

---

## 🧠 Core JavaScript Logic

```javascript

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

