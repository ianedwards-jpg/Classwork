var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

renderTodos(); 

function renderTodos() { 
//Clear todoList element and update todoCountSpan
todoList.innerHTML = "";
todoCountSpan.textContent = todos.length
//Reder new li for each value in todo array 
for (var i = 0; i < todos.length; i++) {
    var todo = todos[i]; //store each value in todo 

    var li = document.createElement("li") //Creates html element for list
    li.textContent = todo; //converts todo variable into text and adds to li variable 
    todoList.appendChild(li); //adds li varible to todoList variable 
    }
}

