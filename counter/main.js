let number = document.getElementById('counter')
let incBtn = document.getElementById('increase')
let resBtn = document.getElementById('reset')
let decBtn = document.getElementById('decrease')
let changeBg = document.getElementById('changeBg')

function increase(){
    number.innerText = Number(number.innerText) + 1
}
function decrease(){
    if(number.innerText != "0") number.innerText = Number(number.innerText) - 1
}
function reset(){
    number.innerText = "0"
}
function changeBG(){
    let bgArray = ['#000', '#ffc800', '#fff000', '#5695d5']
    document.body.style.backgroundColor = bgArray[Math.floor(Math.random() * bgArray.length)]
}
incBtn.addEventListener("click", increase);
decBtn.addEventListener("click", decrease);
resBtn.addEventListener("click", reset);
changeBg.addEventListener("click", changeBG);