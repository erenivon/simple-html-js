const checkbox = document.getElementById("checkbox");
const daynight = document.getElementById("daynight");

let dayText = document.getElementById("day");

checkbox.addEventListener("click", () => {
  if (checkbox.checked) {
    daynight.classList.add("checked");
    dayText.innerText = "NIGHT"
    document.body.classList.add('dark')
  } else {
    daynight.classList.remove("checked");
    dayText.innerText = "DAY"
    document.body.classList.remove('dark')
    
  }
});
