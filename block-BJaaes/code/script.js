let form = document.querySelector("form");
let defaultText = ""

function checkifNumber(string) {
return string.split("").some((e) => {
    if (e === "0" || Number(e)) {
        return true
    }
})
}

function checkForAlphabet(string) {
    return string.split("").every((e) => {
        if (e === "0" || Number(e)) {
            return true
        }
    })
}

function checkifat(string) {
    return string.split("").every((e) => e != "@")
    }


function checkName(event) {
    let nameElm = event.target.elements.name;
    let nameSmall = nameElm.nextElementSibling
    let nameError = ""
    if (nameElm.value == "") {
        nameError = "name cannot be empty"
        nameSmall.innerText = nameError
        nameElm.classList.add("error")
        nameElm.classList.remove("valid")
    }else if (nameElm.value.length < 4) {
        nameError = "name cannot be less than 4 letters"
        nameSmall.innerText = nameError
        nameElm.classList.add("error")
        nameElm.classList.remove("valid")
    }else if (checkifNumber(nameElm.value)) {
        nameError = "name cannot have a number"
        nameSmall.innerText = nameError
        nameElm.classList.add("error")
        nameElm.classList.remove("valid")
    }else{
        nameError = ""
        nameSmall.innerText = nameError
        nameElm.classList.add("valid")
        nameElm.classList.remove("error")
    }
}

function checkMail(event) {
    let emailElm = event.target.elements.email;
    let emailSmall = emailElm.nextElementSibling
    let emailError = ""
    if (emailElm.value == "") {
        emailError = "name cannot be empty"
        emailSmall.innerText = emailError
        emailElm.classList.add("error")
        emailElm.classList.remove("valid")
    }else if (emailElm.value.length < 6) {
        emailError = "email cannot be less than 6 letters"
        emailSmall.innerText = emailError
        emailElm.classList.add("error")
        emailElm.classList.remove("valid")
    }else if (checkifat(emailElm.value)) {
        emailError = "email should include @"
        emailSmall.innerText = emailError
        emailElm.classList.add("error")
        emailElm.classList.remove("valid")
    }else{
        emailError = ""
        emailSmall.innerText = emailError
        emailElm.classList.add("valid")
        emailElm.classList.remove("error")
    }
}

function checkNumber(event) {
    let phoneElm = event.target.elements.phone;
    let phoneSmall = phoneElm.nextElementSibling
    let phoneError = ""
    if (phoneElm.value == "") {
        phoneError = "number cannot be empty"
        phoneSmall.innerText = phoneError
        phoneElm.classList.add("error")
        phoneElm.classList.remove("valid")
    }else if (phoneElm.value.length < 7) {
        phoneError = "name cannot be less than 7 letters"
        phoneSmall.innerText = phoneError
        phoneElm.classList.add("error")
        phoneElm.classList.remove("valid")
    }else if (!checkForAlphabet(phoneElm.value)) {
        phoneError = "cannot have alphabets"
        phoneSmall.innerText = phoneError
        phoneElm.classList.add("error")
        phoneElm.classList.remove("valid")
    }else{
        phoneError = ""
        phoneSmall.innerText = phoneError
        phoneElm.classList.add("valid")
        phoneElm.classList.remove("error")
    }
}

function checkPassword(event) {
    let passwordElm = event.target.elements.password;
    let confirmpasswordElm = event.target.elements.confirmpassword;
    let confirmpasswordSmall = confirmpasswordElm.nextElementSibling
    let confirmpasswordError = ""
    if (confirmpasswordElm.value == "") {
        confirmpasswordError = "password cannot be empty"
        confirmpasswordSmall.innerText = confirmpasswordError
        confirmpasswordElm.classList.add("error")
        passwordElm.classList.add("error")
        confirmpasswordElm.classList.remove("valid")
        passwordElm.classList.remove("valid")
    }else if(confirmpasswordElm.value === passwordElm.value){
        confirmpasswordError = ""
        confirmpasswordSmall.innerText = confirmpasswordError
        confirmpasswordElm.classList.add("valid")
        confirmpasswordElm.classList.remove("error")
        passwordElm.classList.add("valid")
        passwordElm.classList.remove("error")
    }else{
        confirmpasswordError = "passwords dont match"
        confirmpasswordSmall.innerText = confirmpasswordError
        confirmpasswordElm.classList.add("error")
        passwordElm.classList.add("error")
        confirmpasswordElm.classList.remove("valid")
        passwordElm.classList.remove("valid")
    }
}

function checkIfValid(event) {
    if (form.name.classList.contains("valid")
    &&form.email.classList.contains("valid")
    &&form.phone.classList.contains("valid")
    &&form.password.classList.contains("valid")
    &&form.confirmpassword.classList.contains("valid")) 
    {
    alert("User Added Successfully!")
    }
}

function handler(event) {
    event.preventDefault();
    checkName(event);
    checkMail(event);
    checkNumber(event);
    checkPassword(event);
    checkIfValid(event)
}

form.addEventListener("submit" ,handler)