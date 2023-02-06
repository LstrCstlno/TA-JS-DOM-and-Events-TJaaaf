bg1 = document.querySelector(".first")
bg2 = document.querySelector(".second")

click = document.querySelectorAll("button.banner")

// randomColorGenerator() {
//     let maxValue = 0xFFFFFF;
//     let randomColor = Math.floor(maxValue*Math.random()).toString(16).padStart(6,"0");
//     return bg1.style.backgroundColor = randomColor.toUpperCase;
// }

click[0].addEventListener("click", function() {
    let maxValue = 0xFFFFFF;
    let randomColor = Math.floor(maxValue*Math.random()).toString(16).padStart(6,"0");
    return bg1.style.backgroundColor = `#${randomColor.toUpperCase()}`;
})

click[1].addEventListener("mousemove", function() {
    let maxValue = 0xFFFFFF;
    let randomColor = Math.floor(maxValue*Math.random()).toString(16).padStart(6,"0");
    return bg2.style.backgroundColor = `#${randomColor.toUpperCase()}`;
})


