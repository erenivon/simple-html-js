const checkbox = document.getElementById("checkbox");
const daynight = document.getElementById("daynight");

checkbox.addEventListener("click", () => {
  if (checkbox.checked) {
    daynight.classList.add("checked");
  } else {
    daynight.classList.remove("checked");
  }
});
