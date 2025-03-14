let words = [
    "COFEFE", "PROGRAMMING", "JAVASCRIPT", "PYTHON", "HTML", "CSS", "REACT", 
    "ANGULAR", "NODEJS", "DATABASE", "ALGORITHM", "DEBUGGING", "CLOUD", 
    "MACHINELEARNING", "ARTIFICIALINTELLIGENCE", "COMPUTER", "SOFTWARE", 
    "HARDWARE", "SECURITY", "DEVELOPER", "APPLICATION", "INTERNET", 
    "TECHNOLOGY", "DATABASES", "NETWORKING", "CYPHER", "ENCRYPTION", 
    "HACKER", "VIRUS", "MALWARE", "BACKEND", "FRONTEND", "FRAMEWORK", 
    "VERSION", "DEPLOYMENT", "RESPONSIVE", "USERINTERFACE", "UXDESIGN", 
    "CODING", "PROGRAMMER", "SYNCHRONIZATION", "ENCODE", "DECODER", 
    "DEBBUG", "HOSTING", "VIRTUALIZATION", "AUTOMATION", "API", "LIBRARY", 
    "REPOSITORY", "PARSER", "RENDERING", "CACHING", "LOGGING", "BROWSER"
];

let wrongWords = [];
let displayedWord = [];
let imgIndex = 1;
let health = 8;
let healtText = document.getElementById("health");
let selectedWord;
let winOrLoseText = document.getElementById("winOrLose");

function keyPress(char) {
    let guessInput = document.getElementById("guessInput");
    
    guessInput.value = char;
    guess(); 
    guessInput.value = ''; 
}


function guess() {
  let char = document.getElementById("guessInput").value.toUpperCase();

  if (selectedWord.includes(char)) {
    let result = document.getElementById("wordDisplay").innerText.split(" ");
    for (let i = 0; i < selectedWord.length; i++) {
      if (selectedWord[i] == char) {
        result[i] = char;
      }
    }
    document.getElementById("wordDisplay").innerText = result.join(" ");

    if (result.join("") === selectedWord) {
      showWinMessage("YOU WON!");
    }
  } else {
    if (wrongWords.includes(char)) return;
    health--;
    if (health <= 0) {
      healtText.innerText = "0";
      showLoseMessage("YOU LOSE!");
      document.getElementById("hangmanPic").src =
      "img/hangman8.png";
      return;
    }
    wrongWords.push(char);
    document.getElementById("wrongGuesses").innerText += " " + char;
    document.getElementById("hangmanPic").src =
      "img/hangman" + imgIndex + ".png";
    imgIndex++;
    healtText.innerText = health;
  }
}

function showWinMessage(message) {
  winOrLoseText.innerText = message;
  winOrLoseText.style.display = "block";
  document.getElementById("againBtn").classList.remove("hidden");
}

function showLoseMessage(message) {
  winOrLoseText.innerText = message;
  winOrLoseText.style.display = "block";
  document.getElementById("againBtn").classList.remove("hidden");
}

function startNewGame() {
  selectedWord = words[Math.floor(Math.random() * words.length)];
  displayedWord = Array(selectedWord.length).fill("_");
  health = 8;
  imgIndex = 1;
  wrongWords = [];
  document.getElementById("wrongGuesses").innerText = "";
  document.getElementById("hangmanPic").src = "img/hangman0.png";
  document.getElementById("wordDisplay").innerText =
    convertString(displayedWord);
  healtText.innerText = health;

  winOrLoseText.style.display = "none";
  document.getElementById("againBtn").classList.add("hidden");
}

function convertString(string) {
  let converted = "";
  for (let i = 0; i < string.length; i++) {
    converted += "_ ";
  }
  return converted;
}

(function loadGame() {
  startNewGame();
})();
