// selects body element
const body = document.querySelector("body")


// generates random number
function getRandomInt() {
    return Math.floor(Math.random() * 255);
}

body.onmousemove = function() {
    body.style.backgroundColor = `rgb(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()})`
}
let variableName = "SUP"
console.log("Get outta here" + getRandomInt())
console.log(`You get outta here ${variableName}`)