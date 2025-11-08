const taskinput = document.querySelector("#taskinput");
const ol = document.querySelector("ol");

const alltodos = [];

function rendeerTodos() {
    ol.innerHTML = "";
    for(let i = 0; i < alltodos.length; i++) {
        ol.innerHTML += `<li>${alltodos[i]}
        <button onclick="deledtTodo(${i})">delete</button>
        <button  onclick="editTodo(${i})">edit</button>
        </li>`
    }
}

function addTodo() {
    alltodos.push(input.value);
    
    rendeerTodo();
    input.value = "";

}

function deleteTodo(index) {
  console.log("todo deleted", index);
  allTodos.splice(index, 1);
  renderTodo();
}
function editTodo(index) {
  console.log("todo edited", index);
  const updatedVal = prompt("enter updated value", allTodos[index]);
    // allTodos.splice(index , 1 , updatedVal)
  allTodos[index] = updatedVal

  renderTodo()
}

