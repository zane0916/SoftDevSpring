//Zane Wang
//
//
//

console.log("connected");

var newSlate = document.getElementById("clear");
var board = document.getElementById("slate");
var tool = document.getElementById("toggle");
var draw = board.getContext("2d");
var mode = 1; //if mode = 1, then in RectMode, if -1, then in DotMode

draw.fillStyle = "#0000ff"; //makes blue
draw.strokeStyle = "#0000ff"; 

newSlate.addEventListener('click', function(e) { draw.clearRect(0,0,600,900) });

tool.addEventListener('click', function(e) { mode = mode * -1 });

board.addEventListener('click', color);

var color = function() {
    if (mode == 1) {
	draw.fillRect(event.clientX, event.clientY, 10, 20);
    }
    else {
	draw.beginPath();
	draw.ellipse(event.clientX, event.clientY, 10, 10, 0, 360, false);
	ctx.stroke();
    }
}
