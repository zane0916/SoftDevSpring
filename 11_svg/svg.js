/*
Zane Wang
SoftDev2 pd8
K10 -- Ask Circles [Change || Die]
2019-03-13
*/

var slate = document.getElementById("vimage");
var clear = document.getElementById("clear");
var animate = document.getElementById("move");
var faster = document.getElementById("speed");

//state variables
var dotNumber = 0;
var requestID = 0;
var animated = false;

//draw dot
var dot = function(e) {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", e.offsetX);
    c.setAttribute("cy", e.offsetY);
    c.setAttribute("r", "10");
    c.setAttribute("fill", "purple");
    c.setAttribute("stroke","black");
    c.setAttribute("dotNum", dotNumber);
    c.addEventListener("click", modify);
    slate.appendChild(c);
    dotNumber += 1;
}

var modify = function(e) {
    if (this.getAttribute("fill") == "purple") {
	//changes the color of a dot
	this.setAttribute("fill", "green");
	e.stopPropagation();
    }
    else {
	//kills the dot and creates a random new one
	this.setAttribute("cx", Math.floor(Math.random() * (slate.width.baseVal.value)));
	this.setAttribute("cy", Math.floor(Math.random() * (slate.height.baseVal.value)));
	this.setAttribute("fill", "purple"); 
	e.stopPropagation();
    }
}

//clear
var wipe = function(e) {
    while(slate.firstChild) {
	slate.removeChild(slate.firstChild);
    }
    dotNumber = 0;
    if (requestID > 0) {
	animated = false;
	window.cancelAnimationFrame(requestID);
    }
}

//adds movement to dots
var run = function(e) {
    var xVel = 1;
    var yVel = 1;

    animated = true;
    window.requestAnimationFrame(requestID);
    c.setAttribute("cx", c.getAttribute("cx") + xVel);
    c.setAttribute("cy", c.getAttribute("cy") + yVel);
}

//speeds up based on dot number
var fastRun = function(e) {
    var xVel = this.dotNum;
    var yVel = this.dotNum;
}

//adds functionality to the html
slate.addEventListener("click", dot);
clear.addEventListener("click", wipe);
animate.addEventListener("click", run);
faster.addEventListener("click", fastRun);
