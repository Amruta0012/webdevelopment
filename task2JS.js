let currentInput = '0';
let operator = '';
let memory = 0;

function updateDisplay() {
    document.getElementById('display').textContent = currentInput;
}

function appendNumber(number) {
    if (currentInput === '0') {
        currentInput = '';
    }
    currentInput += number;
    updateDisplay();
}

function setOperation(op) {
    operator = op;
    memory = parseFloat(currentInput);
    currentInput = '0';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    operator = '';
    updateDisplay();
}

function appendDecimal(){
    if (!currentInput.includes('.')) {
        currentInput += '.'; 
        updateDisplay(); 
    }
}


function calculate() {
    let result;
    switch (operator) {
        case '+':
            result = memory + parseFloat(currentInput);
            break;
        case '-':
            result = memory - parseFloat(currentInput);
            break;
        case '*':
            result = memory * parseFloat(currentInput);
            break;
        case '/':
            result = memory / parseFloat(currentInput);
            break;
    }
    currentInput = result.toString();
    updateDisplay();
}
