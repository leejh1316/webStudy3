const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list ol");
const toDoInputDelBtn = document.querySelector(".todo-btn button");
let toDos = [];
const TODOS_KEY = "todos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newTodo){
    const li = document.createElement('li');
    li.classList.add(newTodo.clsName)
    li.id = newTodo.id;
    const span = document.createElement('span');
    const btn = document.createElement('span');
    btn.innerText = "❌";
    btn.addEventListener('click', deleteBtn.delete);
    span.innerText = newTodo.text;
    li.append(btn);
    li.appendChild(span);
    toDoList.appendChild(li);
}

function onToDoSubmit(event){
    event.preventDefault();
    const newTodoObj = {
        text : toDoInput.value,
        id : Date.now(),
        clsName : "liCls",
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    toDoInputDelBtn.classList.remove("hidden");
    saveToDos();
    console.log(toDos);
    toDoInput.value = ""
}

const deleteBtn = {
    delete : function onBtnDeleteClick(event){
        const li = event.target.parentElement;
        li.remove();
        console.log(li.id);
        toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
        if(toDos.length<=1)
            toDoInputDelBtn.classList.add("hidden");
        console.log(toDos);
        saveToDos();
    },
    allDelete : function onDeleteBtn(){
        const liClsDel = toDoList.querySelectorAll('#todo-list .liCls');
        for(let i=0; i<liClsDel.length;i++){
            liClsDel[i].remove();
        }
        liClsDel[0].remove();
        toDos= [];
        console.log(toDos);
        toDoInputDelBtn.classList.add("hidden");
        saveToDos();
    }
    
};

toDoForm.addEventListener("submit", onToDoSubmit);
toDoInputDelBtn.addEventListener("click", deleteBtn.allDelete);

const getSaveToDos = localStorage.getItem(TODOS_KEY);
if(getSaveToDos){
    const parsedToDos = JSON.parse(getSaveToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    if(toDos.length>0)
        toDoInputDelBtn.classList.remove("hidden");
}