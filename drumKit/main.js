let chars = document.querySelectorAll("p");
function playMusic(i){
  new Audio(`audio/${i}.wav`).play();
  chars[Number(i-1)].style.transform = "scale(0.8)";
  chars[Number(i-1)].style.color = "#ffc800";
  setTimeout(() => {
    chars[Number(i-1)].style.transform = "scale(1)";
    chars[Number(i-1)].style.color = "#fff";
  }, 120);
}
function keydownEvent(e) {
  chars.forEach(char => {
    if(e.key.toLowerCase() == char.innerText.toLowerCase()){
      new Audio("audio/" + e.key.toLowerCase() + ".wav").play();
      char.style.transform = "scale(0.8)";
      char.style.color = "#ffc800";
    }
  })
}
function keyupEvent(e) {
  chars.forEach(char => {
    if(e.key.toLowerCase() == char.innerText.toLowerCase()){
      new Audio("audio/" + e.key.toLowerCase() + ".wav").play();
      char.style.transform = "scale(1)";
      char.style.color = "#fff";
    }
  })
}
document.addEventListener("keydown", keydownEvent);
document.addEventListener("keyup", keyupEvent);