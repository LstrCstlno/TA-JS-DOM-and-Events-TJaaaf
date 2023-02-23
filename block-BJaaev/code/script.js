let data = JSON.parse(localStorage.getItem('todos')) || []

let todoList = document.querySelector(".todo-list")
let count = Number(localStorage.getItem("count")) || 0;
let classCount = document.querySelector(".count")
classCount.innerText = `${count} items left`
let filter = document.querySelector(".filter")
let all = document.querySelector(".all")
let active = document.querySelector(".active")
let completed = document.querySelector(".complete")
let clear = document.querySelector(".clear")


let input = document.querySelector('input[type="text"]')
input.addEventListener("keyup", (event) =>{
    if(event.keyCode === 13 && event.target.value != "") {
    data.push({
        name: event.target.value,
        checked: false
    })
    addData();
    event.target.value = ""
    count = data.length
    classCount.innerText = `${count} items left`
    localStorage.setItem("todos", JSON.stringify(data))
}
})

function close(event) {
    if (event.target.classList.contains("fa-xmark")) {
        let id = event.target.dataset.id
        data.splice(id, 1)
        addData();
        localStorage.setItem("todos", JSON.stringify(data))
    }
}

function checking(event) {
    let id = event.target.id
    data[id].checked = !data[id].checked
    let label = document.querySelectorAll("label")
    if (data[id].checked) {
        label[id].style.textDecoration = "line-through"
        label[id].style.color = "grey"
        count = count - 1;
        localStorage.setItem("count", count)
    }
    else if (!data[id].checked){
        label[id].style.textDecoration = ""
        label[id].style.color = "black"
        count = count + 1
        localStorage.setItem("count", count)
    }
    classCount.innerText = `${count} items left`
    localStorage.setItem("count", count)
    localStorage.setItem("todos", JSON.stringify(data))
}

function addData() {
    todoList.innerHTML = "";
    data.forEach((obj, index) => {
        let li = document.createElement("li")
        li.classList.add("border", "todo")
        let input = document.createElement("input");
        input.type = "checkbox"
        input.name = "list"
        input.id = index;
        input.checked = obj.checked;
        todoList.addEventListener("change", checking)
        let label = document.createElement("label")
        label.for = index
        label.innerText = obj.name;
        let span = document.createElement("span")
        span.classList.add("close")
        todoList.addEventListener("click", close)
        let i = document.createElement("i")
        i.classList.add("fa-solid", "fa-xmark")
        i.setAttribute("data-id", index)
        span.append(i)
        li.append(input,label,span)
        todoList.append(li)
    }
    )
}

function addComplete() {
    let complete = data.filter((obj) => obj.checked)
    todoList.innerHTML = "";
    complete.forEach((obj, index) => {
        let li = document.createElement("li")
        li.classList.add("border", "todo")
        let input = document.createElement("input");
        input.type = "checkbox"
        input.name = "list"
        input.id = index;
        input.checked = obj.checked;
        todoList.addEventListener("change", checking)
        let label = document.createElement("label")
        label.for = index
        label.innerText = obj.name;
        label.style.textDecoration = "line-through"
        label.style.color = "grey"
        let span = document.createElement("span")
        span.classList.add("close")
        todoList.addEventListener("click", close)
        let i = document.createElement("i")
        i.classList.add("fa-solid", "fa-xmark")
        i.setAttribute("data-id", index)
        span.append(i)
        li.append(input,label,span)
        todoList.append(li)
    }
    )
}

function addActive() {
    let active = data.filter((obj) => !obj.checked)
    todoList.innerHTML = "";
    active.forEach((obj, index) => {
        let li = document.createElement("li")
        li.classList.add("border", "todo")
        let input = document.createElement("input");
        input.type = "checkbox"
        input.name = "list"
        input.id = index;
        input.checked = obj.checked;
        todoList.addEventListener("change", checking)
        let label = document.createElement("label")
        label.for = index
        label.innerText = obj.name;
        let span = document.createElement("span")
        span.classList.add("close")
        todoList.addEventListener("click", close)
        let i = document.createElement("i")
        i.classList.add("fa-solid", "fa-xmark")
        i.setAttribute("data-id", index)
        span.append(i)
        li.append(input,label,span)
        todoList.append(li)
    }
    )
}



function remove() {
    let notCheck = data.filter((obj) => !obj.checked)
    data = notCheck;
    addData()
    localStorage.setItem("todos", JSON.stringify(data))
}

all.addEventListener("click", (event) => {
    all.classList.add("selected")
    active.classList.remove("selected")
    completed.classList.remove("selected")
    clear.classList.remove("selected")
    addData();
    localStorage.setItem("todos", JSON.stringify(data))
})

completed.addEventListener("click", (event) => {
    completed.classList.add("selected")
    all.classList.remove("selected")
    active.classList.remove("selected")
    clear.classList.remove("selected")
    addComplete();
    localStorage.setItem("todos", JSON.stringify(data))
})

active.addEventListener("click", (event) => {
    active.classList.add("selected")
    all.classList.remove("selected")
    completed.classList.remove("selected")
    clear.classList.remove("selected")
    addActive();
    localStorage.setItem("todos", JSON.stringify(data))
})


clear.addEventListener("click", remove)


addData();