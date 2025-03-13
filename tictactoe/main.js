let player = Math.floor(Math.random() * 2);
let start = document.getElementById("start");
let btns = document.querySelectorAll(".box");
let txt = document.getElementById("winner");
let strikeX = [];
let strikeO = [];
let isFinish = false;

function changeScreen() {
  document.querySelector(".screen1").style.display = "none";
  document.querySelector(".screen2").style.display = "flex";
};

function playerControl() {
    if (this.innerText != "" || isFinish == true) return
    if (player == 1) {
        player = 0;
        this.innerText = "X";
        strikeX.push(Array.from(btns).indexOf(this));
        console.log(this)
    } else {
        player = 1;
        this.innerText = "O";
        strikeO.push(Array.from(btns).indexOf(this));
    }
    control();
}

function control() {
  let ways = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
  ];
  ways.forEach((way) => {
    if (way.every((v) => strikeX.includes(v))){
        isFinish = true;
        return txt.innerText = "X WON";
    }
    if (way.every((v) => strikeO.includes(v))){
        isFinish = true;
        return txt.innerText = "O WON";
    }
  })
}

(function start() {
  player == 1
    ? (document.querySelector(".screen1 h1").innerText += " X")
    : (document.querySelector(".screen1 h1").innerText += " O");
})();

start.addEventListener("click", changeScreen)
btns.forEach((btn) => { btn.addEventListener("click", playerControl); });