let li = document.querySelectorAll("li");
let c = document.querySelector(".maroon")
let h2 = document.querySelector("h2");
let count = "";
let clear = "";


let cal = document.querySelector(".calcontainer")

function code() {
    cal.addEventListener("click", (event) => {
        if(event.target.innerText === "C"){
        count = clear;
        }
        else if(event.target.innerText === "="){
        count = eval(count);
        }
        else{
        count = count + event.target.innerText
        }
        return h2.innerText = count
    })
}

code();

