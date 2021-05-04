// Your code goes here
function random(max) {
    return Math.floor(Math.random()*max);
}

function alertBus(event) {
    alert("Fun Bus!  Woohoo!");
    event.stopPropagation();
}

function blackText(event) {
    event.target.style.color = 'black';
    event.stopPropagation();
}

function buttonColorChange(event) {
    const neoColor = 'rgb(' + random(255) + ', ' + random(255) + ', ' + random(255) + ')';
    event.target.style.backgroundColor = neoColor;
    event.target.style.background = neoColor;
    event.target.style.transition = '2s'
    event.stopPropagation();
}

function greenText(event) {
    event.target.style.color = 'green';
    event.stopPropagation();
}


/* Add event listeners */
let buttonList = document.querySelectorAll(".btn");
for (let i=0; i<buttonList.length; i++) { 
    buttonList[i].addEventListener("click", buttonColorChange);
}

let footer = document.querySelector("footer");
footer.addEventListener("click", buttonColorChange);

let h4 = document.querySelectorAll("h4");
h4.forEach((item) => {
    item.addEventListener("mouseover", greenText);
    item.addEventListener("mouseleave", blackText);
});

let busImage = document.querySelector("#image-fun-bus");
busImage.addEventListener("dblclick", alertBus);