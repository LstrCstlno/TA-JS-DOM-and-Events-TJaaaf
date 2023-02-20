let housesNames = document.querySelector(".filter-names")
let peopleOfGOT = document.querySelector(".peopleofgot")
let filterNames = document.querySelector(".filter-names")
let search = document.querySelector('input[type="search"]')

got.houses.forEach((obj) => {
    let li = document.createElement("li")
    li.classList.add("filter-names-box")
    li.innerText = obj.name;
    housesNames.append(li)
})

let allPeople = got.houses.reduce((acc,cv) => {
    acc = acc.concat(cv.people)
    return acc;
},[])


function getPeopleOfGOT(object = allPeople) {
    object.forEach((obj, i) => {
        let li = document.createElement("li")
        li.classList.add("gotbox")
        let div = document.createElement("div")
        div.classList.add("onlyflex")
        let img = document.createElement("img")
        img.src = obj.image;
        img.alt = i;
        let h2 = document.createElement("h2")
        h2.innerText = obj.name
        div.append(img,h2)
        let p = document.createElement("p")
        p.innerText = obj.description;
        let btn = document.createElement("button")
        btn.innerText = "Learn More!"
        li.append(div,p,btn)
        peopleOfGOT.append(li)
    })
}

getPeopleOfGOT(object = allPeople)


function filter(event) {
    peopleOfGOT.innerHTML = "";
    let name = event.target.innerText;
    if (name != "Dothrakis") {
        let newName = name.split("")
        newName.pop();
        newName = newName.join("") ;   
        let filtered = allPeople.filter((obj) => obj.name.includes(newName));
        getPeopleOfGOT(filtered)
    }else if (name = "Dothrakis") {
        drogoFilter = allPeople.filter((obj) => obj.name.includes("Drogo"))
        getPeopleOfGOT(drogoFilter)
    }
}


{/* <li class="gotbox">
            <div class="onlyflex">
              <img src="https://raw.githubusercontent.com/nnnkit/json-data-collections/master/game-of-thrones/game-of-thrones-eddard-stark.jpg" alt="ned">
              <h2>Eddard "Ned" Stark</h2>
            </div>
            <p>"Lord of Winterfell - Warden of the North - Hand of the King - Married to Catelyn (Tully) Stark"</p>
            <button>Lea
            rn More!</button>
          </li> */}

function searchName(event) {
    if(event.keyCode >= 65 && event.keyCode<=90 || event.keyCode== 16){
    peopleOfGOT.innerHTML = ""
    let name = event.target.value;
    let filtered = allPeople.filter((obj) => obj.name.includes(name));
    getPeopleOfGOT(filtered)
    }else if(event.target.value == ''){
        getPeopleOfGOT(object = allPeople)
    } 
    return
}

    // console.log(event.keyCode);

filterNames.addEventListener("click", filter)
search.addEventListener("keyup", searchName)


// 65-90
// 13