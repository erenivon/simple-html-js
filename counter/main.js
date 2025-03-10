let number = document.getElementById('counter')
let incBtn = document.getElementById('increase')
let resBtn = document.getElementById('reset')
let decBtn = document.getElementById('decrease')

let changeBg = document.getElementById('changeBg')

incBtn.addEventListener('click', () => {
    number.innerText = Number(number.innerText) + 1
})
decBtn.addEventListener('click', () => {
    if(number.innerText != "0") number.innerText = Number(number.innerText) - 1
})
resBtn.addEventListener('click', () => {
    number.innerText = "0"
})

changeBg.addEventListener('click', () => {
    let bgArray = ['#000', '#ffc800', '#fff000', '#5695d5']
    document.body.style.backgroundColor = bgArray[Math.floor(Math.random() * bgArray.length)]
})