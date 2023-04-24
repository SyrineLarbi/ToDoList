const formContainer= document.querySelector('.form');
const inputToDoList = document.querySelector('.task');
const listContainer=document.querySelector('.list');
let listTab=[];

let list=JSON.parse(localStorage.getItem('taskList'));
if(list){
    list.forEach((task)=>{
    console.log(task);
        toDoList(task);
    })
}
formContainer.addEventListener("submit",(event)=>{
    event.preventDefault();
    toDoList();
})  

function toDoList(task){   
    let taskText= inputToDoList.value;
    if(task){
        taskText = task.name
    }
    const taskItem=document.createElement("li");
    taskItem.innerText=taskText;
    listContainer.appendChild(taskItem);
    inputToDoList.value="";
    /*******to create icon*******/
    let  btnContainer=document.createElement("div");
    let checkBtn=document.createElement("i");
    let trashBtn=document.createElement("i");
    checkBtn.className="fas check fa-check-square";
    trashBtn.className="fas trash fa-trash-alt";
    btnContainer.appendChild(checkBtn);
    btnContainer.appendChild(trashBtn);
    taskItem.appendChild(btnContainer);
    if (taskText.checked){
        taskItem.classList.add("checked")
    }
    checkBtn.addEventListener("click",()=>{
        taskItem.classList.toggle("checked");
        updateTaskData();
    })
    trashBtn.addEventListener("click",()=>{
        taskItem.remove();
        updateTaskData();
    })
    updateTaskData()
}

function updateTaskData(){
    let taskContainer=document.querySelectorAll("li");
    let taskList=[];
    taskContainer.forEach((taskItem)=>{
        taskList.push({
           name: taskItem.innerText,
           checked: taskItem.classList.contains("checked")
        }
            );
    })
    // console.log(taskList);
    localStorage.setItem("taskList",JSON.stringify(taskList));
}