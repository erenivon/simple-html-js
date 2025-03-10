let computerTxt = document.getElementById('computer');
let playerBtns = document.querySelectorAll('.playerBtn');
let computerBtns = document.querySelectorAll('.computerBtn');
let winnerText = document.getElementById('winner');
let playAgainBtn = document.querySelector('.again');  

for (let i = 0; i < playerBtns.length; i++) {
    playerBtns[i].addEventListener('click', () => {
        let cmp = Math.floor(Math.random() * playerBtns.length);
        winnerText.innerText = decide(i, cmp);
        winnerText.style.visibility = "visible";

        playerBtns[i].style.transform = "scale(1.2)";
        playerBtns.forEach((btn, index) => {
            if (index !== i) {
                btn.style.transform = "scale(0.8)";
                btn.style.pointerEvents = "none"; 
            }
        });

        computerBtns[cmp].style.transform = "scale(1.2)";
        computerBtns.forEach((btn, index) => {
            if (index !== cmp) {
                btn.style.transform = "scale(0.8)";
                btn.style.pointerEvents = "none"; 
            }
        });

        playAgainBtn.style.visibility = "visible";
    });
}

playAgainBtn.addEventListener('click', () => {
    winnerText.style.visibility = "hidden"; 
    playAgainBtn.style.visibility = "hidden"; 

    playerBtns.forEach((btn) => {
        btn.style.transform = "scale(1)";
        btn.style.pointerEvents = "auto";  
    });

    computerBtns.forEach((btn) => {
        btn.style.transform = "scale(1)";  
    });

    computerTxt.innerText = "Computer: ";
});
  
function decide(i, cmp) {
    if (i == cmp) return "DRAW";
    if (i > cmp && cmp != 2) return "YOU WIN";
    return "PC WIN";
}
