let form = document.querySelector("form")
let modal = document.querySelector(".modal")
let hide = document.querySelector(".hide")


let formInfo = {}

function closer(event) {
    if (event.target.classList.contains("close")) {
        modal.hidden = true;
        hide.hidden = false;
    }
    return
}


function handler(event) {
    event.preventDefault();
    formInfo.name = form.elements.text.value
    formInfo.email = form.elements.email.value
    formInfo.prefference = form.elements.gender.value
    formInfo.color = form.elements.color.value
    formInfo.inceptionRatings = form.elements.range.value
    formInfo.bookGenre = form.elements.drone.value
    formInfo.terms = form.elements.terms.check
    let li1 = document.createElement("li")
    li1.classList.add("nameli")
    li1.innerText = `Hello ${formInfo.name}`
    let li2 = document.createElement("li")
    li2.innerText = `Email:${formInfo.email}`
    let li3 = document.createElement("li")
    li3.innerText = `You Love:${formInfo.prefference}`
    let li4 = document.createElement("li")
    li4.innerText = `Color:${formInfo.color}`
    let li5 = document.createElement("li")
    li5.innerText = `Rating:${formInfo.inceptionRatings}`
    let li6 = document.createElement("li")
    li6.innerText = `Book Genre:${formInfo.bookGenre}`
    let li7 = document.createElement("li")
    let closebtn = document.createElement("button") 
    closebtn.classList.add("close")
    closebtn.innerText = "close"
    if (form.terms.checked === true) {
        li7.innerText = "You agree to terms and conditions"
    }else{
        li7.innerText = "You havent agreed to terms and conditions"
    }
    modal.prepend(closebtn,li1,li2,li3,li4,li5,li6,li7)
    let close = document.querySelector(".close")
    close.addEventListener("click", closer)
    modal.hidden = false;
    hide.hidden = true;
}
form.addEventListener("submit", handler)
