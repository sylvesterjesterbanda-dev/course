const inputSpace = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const listDisplay = document.getElementById("list-display");

function add() {
  const todoText = inputSpace.value;
  const newListItem = document.createElement("li");
  const todoTextSpan = document.createElement("span");
  const deleteButton = document.createElement("button");
  const editButton = document.createElement("button");

  todoTextSpan.addEventListener("click", function () {
    if (todoTextSpan.style.textDecoration === "") {
      todoTextSpan.style.textDecoration = "line-through";
    } else {
      todoTextSpan.style.textDecoration = "";
    }
  });

  todoTextSpan.textContent = todoText;
  newListItem.appendChild(todoTextSpan);
  listDisplay.appendChild(newListItem);

  deleteButton.textContent = "Delete";
  newListItem.appendChild(deleteButton);

  editButton.textContent = "Edit";
  newListItem.appendChild(editButton);

  inputSpace.value = "";

  editButton.addEventListener("click", function () {
    const answer = prompt("Edit your task:", todoTextSpan.textContent);

    if (answer !== null) {
      todoTextSpan.textContent = answer;
    }
  });

  deleteButton.addEventListener("click", function () {
    newListItem.remove();
  });
}

addButton.addEventListener("click", function () {
  if (inputSpace.value === "") {
    alert("you can not add an empty space");
  } else {
    add();
  }
});

inputSpace.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    if (inputSpace.value === "") {
      alert("you can not add an empty space");
    } else {
      add();
    }
  }
});
