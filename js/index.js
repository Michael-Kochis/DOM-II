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

function blueText(event) {
    event.target.style.color = 'blue';
    event.stopPropagation();
}

function busWheel() {
    alert("The wheels on the bus go round and round!");
}

function buttonColorChange(event) {
    const neoColor = 'rgb(' + random(255) + ', ' + random(255) + ', ' + random(255) + ')';
    event.target.style.backgroundColor = neoColor;
    event.target.style.background = neoColor;
    event.target.style.transition = '2s'
    event.stopPropagation();
}

var dragged = {};
function dropByReserve(event) {
    event.preventDefault();
    if (dragged.data == "Sign Me Up!") {
        if (dragged.parentElement.className == "btn btn-sun") {
            alert("Attempt to reserve vacation: Fun In The Sun");
        } else if (dragged.parentElement.className == "btn btn-mountain") {
            alert("Attempt to reserve vacation: Mountain Excursion");
        } else {
            alert("Attempt to reserve vacation: Island Getaway");
        }
    } else { 
        alert("Attempt to reserve vacation: " + dragged.data);
    }
 }

function greenText(event) {
    event.target.style.color = 'green';
    event.stopPropagation();
}

let fPress = false;
function keyTest(event) {
    if (fPress && (event.key == "b")) {
        alert("Yes, that's RIGHT!  F and B are for Fun Bus!");
        fPress = false;
    } else if (event.key == "f") {
        fPress = true;
    } 

}

function noDrag(event) {
    if (event.target.data != "Sign Me Up!" && event.target.data != "Fun In The Sun" && event.target.data != "Mountain Excursion" && event.target.data != "Island Getaway") { 
        alert("There are draggable things, but that is not one of them.");
    } else {
        dragged = event.target;
    }
}


/* Add event listeners */
document.addEventListener("keydown", keyTest);
document.addEventListener("dragstart", noDrag);

let buttonList = document.querySelectorAll(".btn");
for (let i=0; i<buttonList.length; i++) { 
    buttonList[i].addEventListener("click", buttonColorChange);
    buttonList[i].addEventListener("dragend", dropByReserve);
}

let footer = document.querySelector("footer");
footer.addEventListener("click", buttonColorChange);

let h4 = document.querySelectorAll("h4");
h4.forEach((item) => {
    item.addEventListener("mouseover", greenText);
    item.addEventListener("mouseleave", blackText);
    item.addEventListener("dragend", dropByReserve);
});

let busImage = document.querySelector("#image-fun-bus");
busImage.addEventListener("dblclick", alertBus);
busImage.addEventListener("wheel", busWheel);

let pickDestination = document.querySelectorAll("h2");
pickDestination.forEach((item) => {
    item.addEventListener("mouseenter", blueText);
    item.addEventListener("mouseleave", blackText);
});