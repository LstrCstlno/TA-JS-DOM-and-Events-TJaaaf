let data = [
    {name: "chopper" ,
    img: "https://www.pngmart.com/files/13/One-Piece-PNG-Picture.png"
    },
    {
        name:"whitebeard" ,
        img:"https://www.pngmart.com/files/13/Violet-One-Piece-PNG-Photos.png"
    },
    {
        name:"luffy" ,
        img: "https://www.pngmart.com/files/13/One-Piece-PNG-Transparent-Picture.png"
    },
    {
        name:"sanji" ,
        img: "https://www.pngmart.com/files/3/One-Piece-Sanji-PNG-File.png"
    },
    {
        name:"going-merry" ,
        img:"https://www.pngmart.com/files/13/One-Piece-PNG-HD.png"
    },
    {
        name:"strawhat" ,
        img: "https://www.pngmart.com/files/13/One-Piece-PNG-Photos.png"
    },
    {
        name:"usopp",
        img:"https://www.pngmart.com/files/3/One-Piece-Chibi-PNG-Clipart.png"
    },
    {
        name:"zoro",
        img:"https://www.pngmart.com/files/3/One-Piece-Chibi-PNG-Pic.png"
    },
    {name: "chopper" ,
    img: "https://www.pngmart.com/files/13/One-Piece-PNG-Picture.png"
    },
    {
        name:"whitebeard" ,
        img:"https://www.pngmart.com/files/13/Violet-One-Piece-PNG-Photos.png"
    },
    {
        name:"luffy" ,
        img: "https://www.pngmart.com/files/13/One-Piece-PNG-Transparent-Picture.png"
    },
    {
        name:"sanji" ,
        img: "https://www.pngmart.com/files/3/One-Piece-Sanji-PNG-File.png"
    },
    {
        name:"going-merry" ,
        img:"https://www.pngmart.com/files/13/One-Piece-PNG-HD.png"
    },
    {
        name:"strawhat" ,
        img: "https://www.pngmart.com/files/13/One-Piece-PNG-Photos.png"
    },
    {
        name:"usopp",
        img:"https://www.pngmart.com/files/3/One-Piece-Chibi-PNG-Clipart.png"
    },
    {
        name:"zoro",
        img:"https://www.pngmart.com/files/3/One-Piece-Chibi-PNG-Pic.png"
    }

]

let memoryGame = document.querySelector(".memory-container")
let count = 0;
let firstGuess = "";
let secondGuess = "";
let previousTarget = null;
let delay = 1200;



function shuffleArray(array)
{
    for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    }
    return array;
}

shuffleArray(data);
let gameGrid = shuffleArray(data);

gameGrid.forEach(item => {
    let li = document.createElement("li")
    li.classList.add("card")
    li.style.backgroundImage = `url(${item.img})`
    li.dataset.name = item.name
    let front = document.createElement("div")
    front.classList.add("front")
    let back = document.createElement("div") 
    back.classList.add("back")
    li.append(front,back)
    memoryGame.append(li)
});

function match() {
    let selected = document.querySelectorAll(".selected")
    if(selected.length > 1){
        selected.forEach((card => {
            card.classList.add("match")
            card.children[0].style.backgroundImage = "none"
        }))
    }
    return;
}

function reset() {
    count = 0;
    firstGuess = "";
    secondGuess = "";
    let selected = document.querySelectorAll(".selected")
    selected.forEach((card) => card.classList.remove("selected"))
}

function select(event) 
{
    if (event.target.parentElement.classList.contains("memory-container")) {
        return
    }
    if (count < 2) 
    {
        count++;
        event.target.parentElement.classList.add("selected")
        while(count == 1) { 
            firstGuess = event.target.parentElement.dataset.name;
            break;
        }
        while(count == 2) { 
            secondGuess = event.target.parentElement.dataset.name;
            break;
        }
        if (firstGuess != "" && secondGuess!= "") {
            if (firstGuess === secondGuess) {
                setTimeout(match,delay)
                setTimeout(reset,delay)
            }else{
                setTimeout(reset,delay)
            }
        }
    }
    return;
}


memoryGame.addEventListener("click", select)


