let computerTxt = document.getElementById('computer')
let playerBtns = document.querySelectorAll('.playerBtn')
let winnerText = document.getElementById('winner')
for (let i = 0; i < playerBtns.length; i++) {
    playerBtns[i].addEventListener('click', () => {
        let cmp = Math.floor(Math.random() * playerBtns.length)
        computerTxt.innerText += cmp
        winnerText.innerText += decide(i, cmp)
    })
}
function decide(i, cmp){
    /*if(i == cmp) return "DRAW"
    if(cmp > i || (i == 2 && cmp == 0)) return "PC WIN"
    if (i > cmp || (i != 2 && cmp != 0)) return "YOU WIN"*/
    if(i == cmp) return "DRAW"
    if(i > cmp && cmp != 2){
        return "YOU WIN"
    }else{
        return "PC WIN"
    }
}