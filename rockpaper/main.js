let computerTxt = document.getElementById("computer");
let playerBtns = document.querySelectorAll(".playerBtn");
let computerBtns = document.querySelectorAll(".computerBtn");
let winnerText = document.getElementById("winner");
let playAgainBtn = document.querySelector(".again");

function playGame() {
    let arrayFrom = Array.from(playerBtns).indexOf(this)
  let cmp = Math.floor(Math.random() * playerBtns.length);
  winnerText.innerText = decide(arrayFrom, cmp);
  winnerText.style.visibility = "visible";
  this.style.transform = "scale(1.2)";
  playerBtns.forEach((btn, index) => {
    if (index !== arrayFrom) {
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
}
function playAgain() {
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
}

function decide(i, cmp) {
  if (i == cmp) return "DRAW";
  if (i > cmp && cmp != 2) return "YOU WIN";
  return "PC WIN";
}

playerBtns.forEach((btns) => {
  btns.addEventListener("click", playGame);
});
playAgainBtn.addEventListener("click", playAgain);
