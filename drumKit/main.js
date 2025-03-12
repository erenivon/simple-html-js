let char = document.querySelectorAll(".char p");
document.addEventListener("keydown", (e) => {
  if (e.code == "KeyA") {
    new Audio("audio/usbcikar.wav").play();
    char[0].style.transform = "scale(0.8)";
    char[0].style.color = "#ffc800";
  }
  if (e.code == "KeyS") {
    new Audio("audio/usbsok.wav").play();
    char[1].style.transform = "scale(0.8)";
    char[1].style.color = "#ffc800";
  }
  if (e.code == "KeyD") {
    new Audio("audio/uyari.wav").play();
    char[2].style.transform = "scale(0.8)";
    char[2].style.color = "#ffc800";
  }
  if (e.code == "KeyF") {
    new Audio("audio/uyari3.wav").play();
    char[3].style.transform = "scale(0.8)";
    char[3].style.color = "#ffc800";
  }
  if (e.code == "KeyG") {
    new Audio("audio/uyari2.wav").play();
    char[4].style.transform = "scale(0.8)";
    char[4].style.color = "#ffc800";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code == "KeyA") {
    char[0].style.transform = "scale(1)";
    char[0].style.color = "#fff";
  }
  if (e.code == "KeyS") {
    char[1].style.transform = "scale(1)";
    char[1].style.color = "#fff";
  }
  if (e.code == "KeyD") {
    char[2].style.transform = "scale(1)";
    char[2].style.color = "#fff";
  }
  if (e.code == "KeyF") {
    char[3].style.transform = "scale(1)";
    char[3].style.color = "#fff";
  }
  if (e.code == "KeyG") {
    char[4].style.transform = "scale(1)";
    char[4].style.color = "#fff";
  }
});
