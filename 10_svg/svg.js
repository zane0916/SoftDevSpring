/*
Zane Wang
SoftDev2 pd8
K10 -- Ask Circles [Change || Die]
2019-03-13
*/

var slate = document.getElementById("vimage");
var clear = document.getElementById("clear");

//draw dot
var dot = function(e) {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", e.offsetX);
    c.setAttribute("cy", e.offsetY);
    c.setAttribute("r", "10");
    c.setAttribute("fill", "purple");
    c.setAttribute("stroke","black");
    slate.appendChild(c);
    c.addEventListener("click", modify);
}


var modify = function(e) {
    if (e.getAttribute("fill") == "purple") {
	//changes the color of a dot
	e.setAttribute("fill", "green");
    }
    else if (e.getAttribute("fill") == "green") {
	//kills the dot
	slate.removeChild(e);
    }
}

//clear
var wipe = function(e) {
    while(slate.firstChild) {
	slate.removeChild(slate.firstChild);
    }
}

//adds functionality to the html
slate.addEventListener("click", dot);
clear.addEventListener("click", wipe);


