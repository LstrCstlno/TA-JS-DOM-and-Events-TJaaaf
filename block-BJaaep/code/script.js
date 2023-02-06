let without = document.querySelector("ul.without")

for (let i = 0; i < 12; i++) {
    let li = document.createElement("li")
    li.classList.add("box")
    li.addEventListener("click", function(){
        setTimeout(function(){
            return li.innerText = "";
        }, 5000)
        return li.innerText = i+1;
    })
    without.append(li)
}

let deligation = document.querySelector("ul.with")

for (let i = 0; i < 12; i++) {
    let li = document.createElement("li")
    li.classList.add("box")
    let number = i+1;
    li.setAttribute("data-number", number)
    deligation.append(li)
}

function test(event) {
    setTimeout(function(){
        return event.target.innerText = "";
    }, 5000)
    return event.target.innerText = event.target.dataset.number;
}

deligation.addEventListener("click",test)







