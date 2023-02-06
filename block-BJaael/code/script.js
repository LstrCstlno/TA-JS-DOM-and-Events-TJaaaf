let randomNumber = function() {
    return Math.floor(Math.random()*1000)
}

let randomColor = function() {
    let max = 0xFFFFFF;
    let color = Math.floor(max*Math.random()).toString(16).padStart(6,"0");
    return `#${color}`
}

let a = []
for (let i = 0; i < 500; i++) {
    let li = document.createElement("li")
    let div = document.createElement("div")
    div.classList.add("box")
    let p = document.createElement("p")
    p.innerText = randomNumber();
    div.append(p)
    li.append(div)
    a[i] = li
}

let ul = document.querySelector("ul")
a.forEach((li) => ul.append(li))

let p = document.querySelectorAll("p")
let div = document.querySelector(".boxParent")
let box = document.querySelectorAll(".box")

p.forEach((p)=> div.addEventListener("mousemove", function(){
    return p.innerText = randomNumber();
}))

box.forEach((box)=> div.addEventListener("mousemove", function(){
    return box.style.backgroundColor = randomColor();
}))






