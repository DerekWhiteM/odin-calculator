let displayValue = '';
let firstValue = 0;
let selectedOperator = null;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) { 
        alert('You cannot divide by zero');
        clear();
        return 0; 
    }
    return a / b;
}

function operate(operator, firstNumber, secondNumber) {

    const options = [
        ['+', add],
        ['-', subtract],
        ['*', multiply],
        ['/', divide]
    ];

    const selectedFunction = options.find(el => el[0] === operator)[1];

    return selectedFunction(firstNumber, secondNumber);

}

// Setup display
function setDisplay(value) {
    displayValue = value;
    const display = document.getElementById('displayValue');
    display.textContent = value;
}

// Set up number buttons
const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => button.addEventListener('click', e => {
    setDisplay(Number(displayValue + e.target.id));
}));

// Set up operators
const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => button.addEventListener('click', e => {
    firstValue = Number(displayValue) || 0;
    setDisplay('0');
    selectedOperator = e.target.id;
}));

// Set up equals button
const equalsButton = document.getElementById('equals');
equalsButton.addEventListener('click', () => {
    const computedValue = operate(selectedOperator, firstValue, displayValue);
    setDisplay(computedValue);
    firstValue = computedValue;
    selectedOperator = null;
});

// Set up clear button
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clear);
function clear() {
    setDisplay('0');
    firstValue = 0;
    selectedOperator = null;
}