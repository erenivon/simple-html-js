const display = document.getElementById("display");

function appendToDisplay(value) {
    (display.innerText === "0" && value !== ".") ? display.innerText = value : display.innerText += value;
    display.classList.add("input-animation");
    setTimeout(() => {
        display.classList.remove("input-animation");
    }, 100);
}

function clearDisplay() {
  display.innerText = "0";
  display.classList.add("clear-animation");
  setTimeout(() => {
    display.classList.remove("clear-animation");
  }, 300);
}

function deleteLastChar() {
  (display.innerText.length === 1) ? display.innerText = "0" : display.innerText = display.innerText.slice(0, -1);
}

function calculate() {
  let expression = display.innerText.replace(/×/g, "*");
  if (display.innerText.match(/[0-9]+[+/×-]/)) {
    let result = eval(expression);
    if (Number.isInteger(result)) {
      display.innerText = result;
      display.innerText = result.toFixed(8).replace(/\.?0+$/, "");
    }
  } else {
    display.innerText = "Error";
    setTimeout(() => {
      display.innerText = "0";
    }, 800);
  }
  display.classList.add("result-animation");
  setTimeout(() => {
    display.classList.remove("result-animation");
  }, 300);
}
function calculatePercentage() {
  try {
    let value = parseFloat(display.innerText);
    display.innerText = (value / 100).toString();
  } catch (error) {
    display.innerText = "Error";
  }
}

function keyEvent(e){
    let functionNames = {
        "appendToDisplay": [".", "+", "-", "*", "/", "0","1","2","3","4","5","6","7","8","9"],
        "calculate": ["Enter", "="],
        "deleteLastChar": ["Backspace"],
        "clearDisplay": ["Escape", "C", "c"],
        "calculatePercentage": ["%"]
    }
    Object.entries(functionNames).forEach(entry => {
        if(entry[1].includes(e.key)){
            if(entry[0] == "appendToDisplay") appendToDisplay(e.key);
            if(entry[0] == "calculate") calculate(e.key);
            if(entry[0] == "deleteLastChar") deleteLastChar(e.key);
            if(entry[0] == "clearDisplay") clearDisplay(e.key);
            if(entry[0] == "calculatePercentage") calculatePercentage(e.key);
        }
    })
}
document.addEventListener("keydown", keyEvent);