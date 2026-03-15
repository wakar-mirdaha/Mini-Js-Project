const resultDisplay = document.querySelector('#result');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent;

        if (buttonValue === "C") {
            clearResult();
        } else if (buttonValue === "Calculate") {
            calculateResult();
        } else {
            appendValue(buttonValue);
        }
    });
});

function calculateResult() {
    try {
        if (resultDisplay.value.trim() !== "") {
            resultDisplay.value = eval(resultDisplay.value);
        }
    } catch (error) {
        resultDisplay.value = "Error";
        setTimeout(() => clearResult(), 1500);
    }
}

function appendValue(val) {
    if (resultDisplay.value === "Error") {
        resultDisplay.value = "";
    }
    resultDisplay.value += val;
}

function clearResult() {
    resultDisplay.value = "";
}