//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//Event Listeners
document.addEventListener("DOMContentLoaded",getTodos)
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);
filterOption.addEventListener("click",filterTodo);


//Functions
function addTodo(event){
    //prevent form from submitting
    event.preventDefault();
   
    //Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create LI
    const newTodo = document.createElement("li");
    newTodo.innerText=todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //add todo to local storage
    saveLocalTodos(todoInput.value);
    //CHECK MARK BUTTON
    const completedButton = document.createElement("button")
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add("complete-btn")
    todoDiv.appendChild(completedButton);
    //Trash BUTTON
    const trashButton = document.createElement("button")
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("trash-btn")
    todoDiv.appendChild(trashButton);
    //APPEND TO LIST
    todoList.appendChild(todoDiv)
    //CLEAR INPUT FIELD
    todoInput.value = "";

}

function deleteCheck(event){
    const item = event.target;
    const todo = item.parentElement;

    //DELETE
    if (item.classList[0] === "trash-btn"){
        //animation
        todo.classList.add("fall");
        removelocalTodos(todo)
        todo.addEventListener('transitionend',function(){
            todo.remove();
        });
    }

    //CHECK MARK
    if (item.classList[0] === "complete-btn"){
        todo.classList.toggle("completed")
    }

}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                console.log(todo.style.display);
                break
            case "completed":
                console.log(todo.classList);
                if (todo.classList.contains("completed")){
                    todo.style.display="flex";
                    console.log("is completed")
                } else{
                    todo.style.display="none";
                }
                break
            case "uncompleted":
                console.log(todo.classList)
                if (todo.classList.contains("completed")){
                    todo.style.display="none";
                } else{
                    todo.style.display="flex";
                }
                break
        }
    });
}

function saveLocalTodos(todo){
    //check
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function getTodos(){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo){
        //Todo DIV
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        //create LI
        const newTodo = document.createElement("li");
        newTodo.innerText=todo;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);
    
        //CHECK MARK BUTTON
        const completedButton = document.createElement("button")
        completedButton.innerHTML = '<i class="fas fa-check"></i>'
        completedButton.classList.add("complete-btn")
        todoDiv.appendChild(completedButton);
        //Trash BUTTON
        const trashButton = document.createElement("button")
        trashButton.innerHTML = '<i class="fas fa-trash"></i>'
        trashButton.classList.add("trash-btn")
        todoDiv.appendChild(trashButton);
        //APPEND TO LIST
        todoList.appendChild(todoDiv)
    })
}

function removelocalTodos(todo){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    let name = todo.children[0].innerText;
    todos.splice(todos.indexOf(name),1)
    localStorage.setItem("todos",JSON.stringify(todos));

}