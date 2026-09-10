const inputSpace = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const listDisplay =document.getElementById("list-display");


addButton.addEventListener("click", function(){

    const todoText = inputSpace.value
    const newItem = document.createElement("li")
     newItem.textContent = todoText;
     listDisplay.appendChild(newItem)
     inputSpace.value =""

});
