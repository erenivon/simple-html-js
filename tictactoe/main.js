let player = Math.floor(Math.random() * 2)
let start = document.getElementById('start')
let btn = document.querySelectorAll('.box')
let txt = document.getElementById('winner')
let strikeX = []
let strikeO = []
if (player == 1) {
    document.querySelector(".screen1 h1").innerText += " X"
} else {
    document.querySelector(".screen1 h1").innerText += " O"
}
start.addEventListener('click', () => {
    document.querySelector('.screen1').style.display = "none"
    document.querySelector('.screen2').style.display = "flex"
})
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', () => {
        if (btn[i].innerText == "" && txt.innerText == "") {
            control(i)
            if (player == 1) {
                btn[i].innerText = "X"
                player = 0
            } else {
                btn[i].innerText = "O"
                player = 1
            }
        }
    })
}
function control(index) {
    let contr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 4, 6], [2, 5, 8]
    ]
    if (player == 1) {
        strikeX.push(index)
    } else {
        strikeO.push(index)
    }
    for (let i = 0; i < contr.length; i++) {
        if (contr[i].every(v => strikeX.includes(v))) txt.innerText = "X WON"
        if (contr[i].every(v => strikeO.includes(v))) txt.innerText = "O WON"
    }
}