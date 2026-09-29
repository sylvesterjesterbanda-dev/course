const inputSpace = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const listDisplay = document.getElementById("list-display");

function add() {
  console.log("test");

  const todoText = inputSpace.value;
  const newItem = document.createElement("li");

  newItem.addEventListener("click", function () {
    if (newItem.style.textDecoration === "") {
      newItem.style.textDecoration = "line-through";
    } else {
      newItem.style.textDecoration = "";
    }
  });
  newItem.textContent = todoText;
  listDisplay.appendChild(newItem);
  inputSpace.value = "";
}

addButton.addEventListener("click", function () {
  add();
});

inputSpace.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    add();
  }
});
