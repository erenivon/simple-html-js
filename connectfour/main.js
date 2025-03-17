let player = Math.floor(Math.random() * 2);
let boxes = document.querySelectorAll('.cell')
let colorBtn = document.getElementById('btnC')
let turnText = document.getElementById('playerText')
let resBtn = document.getElementById('restartSymbol')
let boxShadows = ["0 4px 0 #e67b00", "0 4px 0 #770000"]
let boxColors = ["#ffc800", "#9c2d2d"]
let pairYellow = []
let pairRed = []
let finishGame = false

let ways = [ 
    [0, 1, 2, 3], [41, 40, 39, 38],[7, 8, 9, 10], 
    [34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24], 
    [21, 22, 23, 24], [20, 19, 18, 17], [28, 29, 30, 31], 
    [13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3], 
    [0, 7, 14, 21], [41, 34, 27, 20], [1, 8, 15, 22], 
    [40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18], 
    [3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25], 
    [37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15], 
    [6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24], 
    [41, 33, 25, 17], [7, 15, 23, 31], [34, 26, 18, 10], 
    [14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17], 
    [6, 12, 18, 24], [28, 22, 16, 10], [13, 19, 25, 31], 
    [21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18], 
    [5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22], 
    [2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25], 
    [40, 32, 24, 16], [9, 7, 25, 33], [8, 16, 24, 32], 
    [11, 7, 23, 29], [12, 18, 24, 30], [1, 2, 3, 4], 
    [5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9],
    [15, 16, 17, 18], [19, 18, 17, 16], [22, 23, 24, 25], 
    [26, 25, 24, 23], [29, 30, 31, 32], [33, 32, 31, 30], 
    [36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28], 
    [8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31], 
    [11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34] 
    ]; 

function control(){
    ways.forEach(way => {
        if(way.every((v) => pairRed.includes(v))){
            turnText.innerText =  "RED Wins!";
            finishGame = true
            turnText.classList.add('anim')
            colorBtn.style.backgroundColor = boxColors[1]
            colorBtn.style.boxShadow = boxShadows[1]
            colorBtn.style.cursor = "pointer"
            colorBtn.innerHTML += '<i id="restartSymbol" onclick="refreshGame()" class="fas fa-redo"></i>'
            return
        }
        if(way.every((v) => pairYellow.includes(v))){
            turnText.innerText = "YELLOW Wins!";
            turnText.classList.add('anim')
            colorBtn.style.backgroundColor = boxColors[0]
            colorBtn.style.boxShadow = boxShadows[0]
            colorBtn.style.cursor = "pointer"
            colorBtn.innerHTML += '<i id="restartSymbol" onclick="refreshGame()" class="fas fa-redo"></i>'
            finishGame = true
            return
        }
    })
}

function refreshGame(){
    pairRed = []
    pairYellow = []
    turnText.classList.remove('anim')
    turnText.innerText = "Player:"
    boxes.forEach(box => {
        box.style.backgroundColor = ""
    })
    colorBtn.innerHTML = ''
    colorBtn.style.cursor = "not-allowed"
    finishGame = false;
    player = Math.floor(Math.random() * 2);
    colorBtn.style.backgroundColor = boxColors[player]
    colorBtn.style.boxShadow = boxShadows[player]
}

function clickBox(){
    if(this.style.backgroundColor != "") return;
    if(finishGame == true) return;
    if (player == 1){
        this.style.backgroundColor = "#9c2d2d"
        player = 0
        pairRed.push(Array.from(boxes).indexOf(this))
        colorBtn.style.backgroundColor = boxColors[player]
        colorBtn.style.boxShadow = boxShadows[player]
        control()
    } else {
        this.style.backgroundColor = "#ffc800"
        player = 1
        pairYellow.push(Array.from(boxes).indexOf(this))
        colorBtn.style.backgroundColor = boxColors[player]
        colorBtn.style.boxShadow = boxShadows[player]
        control()
    }
}

(function start() {
  colorBtn.style.backgroundColor = boxColors[player]
  colorBtn.style.boxShadow = boxShadows[player]
  console.log(player)
})();


boxes.forEach(box => {
    box.addEventListener('click', clickBox)
})

