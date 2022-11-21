var i = 0;
var buttons = document.getElementsByClassName("button");
for(i; i<buttons.length; i++) {
    buttons[i].style.color = buttons[i].textContent;
}

function showDropdown() {
    for(i = 0; i<buttons.length; i++) {
        if(buttons[i].style.display == "none")
            buttons[i].style.display = "block";
        else buttons[i].style.display = "none";
    }
}

function colorChange(color) {
    let text = document.getElementById("text");
    if(text.style.color == color) alert("text already is " + color);
    else text.style.color = color;
}