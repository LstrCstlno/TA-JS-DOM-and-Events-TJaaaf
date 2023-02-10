/* <div class="flex list-control">
<input type="checkbox">
<p>love </p>
<button> X</button>
</div> */

let form = document.querySelector("form")
let movieList = document.querySelector(".movie-list")

function handler(event) {
    event.preventDefault();
    let div = document.createElement("div")
    div.classList.add("flex", "list-control")
    let input = document.createElement("input")
    input.type = "checkbox"
    let p = document.createElement("p")
    p.innerText = event.target.elements.movie.value
    let button = document.createElement("button")
    button.innerText = "X"
    div.append(input,p,button)
    movieList.append(div)
}

function close(event) {
    if(event.target.innerText == "X"){
        event.target.parentElement.remove();
    }
}

form.addEventListener("submit", handler)
movieList.addEventListener("click", close)