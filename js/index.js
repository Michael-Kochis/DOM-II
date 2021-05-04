// Your code goes here
function random(max) {
    return Math.floor(Math.random()*max);
}

function buttonColorChange(event) {
    const neoColor = 'rgb(' + random(255) + ', ' + random(255) + ', ' + random(255) + ')';
    event.target.style.backgroundColor = neoColor;
    event.target.style.background = neoColor;
    event.stopPropagation();
}


/* Add event listeners */
let buttonList = document.querySelectorAll(".btn");
for (let i=0; i<buttonList.length; i++) { 
    buttonList[i].addEventListener("click", buttonColorChange);
}

let footer = document.querySelector("footer");
footer.addEventListener("click", buttonColorChange);