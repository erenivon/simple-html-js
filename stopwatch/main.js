let startBtn = document.getElementById('startBtn')
let resetBtn = document.getElementById('resetBtn')
let timerText = document.getElementById('timeDisplay')

let timer;
let second = 0;
let minute = 0;

let isRunning = false;

function start() {
    if (isRunning){
        stopWatch()
        startBtn.style.backgroundColor = "#3a9e3f"
        startBtn.innerText = "Start"
    } else {
        startWatch()
        startBtn.style.backgroundColor = "#4fa2c9"
        startBtn.innerText = "Stop"
    }
}

function reset() {
    stopWatch();
    minute = 0;
    second = 0;
    updateDisplay();
    startBtn.textContent = "Start";
    isRunning = false;
}

function startWatch(){
    timer = setInterval(() => {
        second++;
        if (second == 60) {
            second = 0;
            minute++;
        }
        updateDisplay();
    }, 1000);
    
    isRunning = true
}

function stopWatch(){
    clearInterval(timer)
    isRunning = false
}

function updateDisplay(){
    let formatSecond = second < 10 ? "0" + second : second
    let formatMinute = minute < 10 ? "0" + minute : minute
    timerText.innerText = formatMinute + ":" + formatSecond;
}

resetBtn.addEventListener('click', reset)
startBtn.addEventListener('click', start)