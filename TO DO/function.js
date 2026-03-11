const form = document.querySelector(".todo-form");
const input = document.querySelector(".todo-input");
const todoItems = document.querySelector(".todo-items");

form.addEventListener("submit", function (e) {
  e.preventDefault(); 

  const text = input.value.trim();

  if (text !== "") {
    addTodo(text);
    input.value = ""; 
  }
});


function addTodo(text) {
  const li = document.createElement("li");
  li.classList.add("item");

  li.innerHTML = `
        <input class="checkbox" type="checkbox">
        ${text}
        <button class="delete-button">x</button>
    `;

  todoItems.appendChild(li);
}


todoItems.addEventListener("click", function (e) {


  if (e.target.classList.contains("delete-button")) {
    e.target.parentElement.remove();
  }

  if (e.target.classList.contains("checkbox")) {
    const li = e.target.parentElement;

    if (e.target.checked) {
      li.style.textDecoration = "line-through";
    } else {
      li.style.textDecoration = "none";
    }
  }
});