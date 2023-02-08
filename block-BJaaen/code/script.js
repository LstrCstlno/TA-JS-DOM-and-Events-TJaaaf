let computerMoves = document.querySelectorAll(".computermovebox")
let you = document.querySelector(".you")
let rpc = document.querySelectorAll(".yourmovebox")
let rock = document.querySelector(".rock")
let paper = document.querySelector(".paper")
let scissors = document.querySelector(".scissors")
let yourMoveText = document.querySelector("p.yourmove")
let compMove = document.querySelector("p.computermove")
let verdict = document.querySelector(".verdict")
let youCounter = document.querySelector("p.counter")
let compCounter = document.querySelector("p.compcounter")
let count = 0;
let compCount = 0;
let foot = document.querySelector(".foot")
let reset = 0;



function getRandomRPC(event) {
    if (event.target.classList.contains("rock") || event.target.classList.contains("paper") ||event.target.classList.contains("scissors")) {
        random = Math.floor(Math.random()*3)
        computerMoves[random]
    }
    if (computerMoves[random].classList.contains("comprock")) {
        computerMoves[random].style.color = "black"
        computerMoves[1].style.color = "#1E90FF"
        computerMoves[2].style.color = "#1E90FF"
    }
    else if (computerMoves[random].classList.contains("comppaper")) {
        computerMoves[0].style.color = "#1E90FF"
        computerMoves[2].style.color = "#1E90FF"
        computerMoves[random].style.color = "black"
    }
    else if (computerMoves[random].classList.contains("compscissors")) {
        computerMoves[0].style.color = "#1E90FF"
        computerMoves[1].style.color = "#1E90FF"
        computerMoves[random].style.color = "black"
    }
    if (event.target.dataset.move === "--- Rock" ||event.target.dataset.move === "--- Paper" ||event.target.dataset.move === "--- Scissors") {
        compMove.innerText = computerMoves[random].dataset.compmove
    }
    else{
        return compMove.innerText = "";
    }
}

function handler(event){
    if (event.target.classList.contains("rock")) {
        event.target.style.color = "black"
        paper.style.color = "#1E90FF"
        scissors.style.color = "#1E90FF"
    }
    else if (event.target.classList.contains("paper")) {
        rock.style.color = "#1E90FF"
        scissors.style.color = "#1E90FF"
        event.target.style.color = "black"
    }
    else if (event.target.classList.contains("scissors")) {
        rock.style.color = "#1E90FF"
        paper.style.color = "#1E90FF"
        event.target.style.color = "black"
    }
    if (event.target.dataset.move === "--- Rock" ||event.target.dataset.move === "--- Paper" ||event.target.dataset.move === "--- Scissors") {
        yourMoveText.innerText = event.target.dataset.move
    }
    else{
        return yourMoveText.innerText = "";
    }
}

you.addEventListener("click", handler)
you.addEventListener("click", getRandomRPC)
you.addEventListener("click", checkWinner)
foot.addEventListener("click", resetCount)


function checkWinner() {
    if (yourMoveText.innerText === compMove.innerText ) {
        verdict.innerText = "it's a tie."
        verdict.style.color = "green"
    }else if (
    (yourMoveText.innerText === "--- Rock" && compMove.innerText === "--- Paper") 
    ||(yourMoveText.innerText === "--- Paper" && compMove.innerText === "--- Scissors") 
    ||(yourMoveText.innerText === "--- Scissors" && compMove.innerText === "--- Rock")
    ){
        verdict.innerText = "You Lost!!"
        compCount = compCount + 1;
        compCounter.innerText = compCount;
        verdict.style.color = "#ff1e1e"
    }else{
        verdict.innerText = "You Won!!!"
        count = count+1;
        youCounter.innerText = count
        verdict.style.color = "#1E90FF"
    }
    return verdict.innerText
}


function resetCount(event){
    if (event.target.classList.contains("reset")) {
        youCounter.innerText = reset;
        compCounter.innerText = reset;
        yourMoveText.innerText = ""
        compMove.innerText = "";
        verdict.innerText = "";
    }
    return
}




