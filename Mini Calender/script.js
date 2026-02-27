const monthName = document.getElementById('month-name');
const dayName = document.getElementById('day-name');
const dayNumber = document.getElementById('day-number');
const yearNumber = document.getElementById('year');

const date = new Date();

monthName.textContent = date.toLocaleString("en", { month: "long" });
dayName.textContent = date.toLocaleDateString("en", { weekday: "long" });
dayNumber.textContent = date.getDate();
yearNumber.textContent = date.getFullYear();