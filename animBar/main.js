const checkbox = document.getElementById("checkbox");
const daynight = document.getElementById("daynight");

let dayText = document.getElementById("day");

checkbox.addEventListener("click", () => {
  if (checkbox.checked) {
    daynight.classList.add("checked");
    document.body.style.backgroundColor = "#022152"
    dayText.innerText = "NIGHT"
  } else {
    daynight.classList.remove("checked");
    dayText.innerText = "DAY"
    document.body.style.backgroundColor = "#5d77a3"
  }
});
