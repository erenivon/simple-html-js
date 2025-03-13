const display = document.getElementById('display');

function appendToDisplay(value) {
    if (display.innerText === '0' && value !== '.') {
        display.innerText = value;
    } else if (display.innerText.length < 12) {
        display.innerText += value;
    }
    display.classList.add('input-animation');
    setTimeout(() => {
        display.classList.remove('input-animation');
    }, 100);
}

function clearDisplay() {
    display.innerText = '0';
    display.classList.add('clear-animation');
    setTimeout(() => {
        display.classList.remove('clear-animation');
    }, 300);
}

function deleteLastChar() {
    if (display.innerText.length === 1) {
        display.innerText = '0';
    } else {
        display.innerText = display.innerText.slice(0, -1);
    }
}

function calculate() {
    try {
        let expression = display.innerText.replace(/×/g, '*');
        
        let result = eval(expression);
        
        if (result === Infinity || result === -Infinity) {
            display.innerText = 'Error';
        } else {
            if (Number.isInteger(result)) {
                display.innerText = result;
            } else {
                display.innerText = result.toFixed(8).replace(/\.?0+$/, '');
            }
        }
    } catch (error) {
        display.innerText = 'Error';
    }
    display.classList.add('result-animation');
    setTimeout(() => {
        display.classList.remove('result-animation');
    }, 300);
}
function calculatePercentage() {
    try {
        let value = parseFloat(display.innerText);
        display.innerText = (value / 100).toString();
    } catch (error) {
        display.innerText = 'Error';
    }
}
document.addEventListener('keydown', (event) => {
    const key = event.key;
    
    if (/[0-9]/.test(key)) {
        appendToDisplay(key);
    } else if (key === '.') {
        appendToDisplay('.');
    } else if (key === '+' || key === '-') {
        appendToDisplay(key);
    } else if (key === '*') {
        appendToDisplay('×');
    } else if (key === '/') {
        appendToDisplay('/');
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Backspace') {
        deleteLastChar();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        clearDisplay();
    } else if (key === '%') {
        calculatePercentage();
    }
});