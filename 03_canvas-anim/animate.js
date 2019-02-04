/*
team 3Zs - Stefan Tan and Zane Wang
SoftDev2 pd8
K02 -- Connecting the Dots
2019-02-04
*/

// instantiate canvas
var canvas = document.getElementById('playground');
var ctx = canvas.getContext("2d");

//state variables
var requestID; var radius = 0, var growing = false;

// clears everything in the canvas
// starts from the origin of the canvas
var clear = function (e) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  /*
  e.preventDefault()
  preventDefault prevents a default action from happening if an event is not handled
  similarly to a conditional
  We did not come to a consensus on what preventDefault should be used for in this assignment
  */
  coords = {'x': canvas.width/2, 'y': canvas.height/2}
  console.log('I am yeeting out all of the color in the canvas fam');
};

// button stops the animation on the canvas now
var stopButton = document.getElementById('stop');
stopButton.addEventListener('click', stopIt);

// button starts the animation on the canvas
var startButton = document.getElementById('circle');
startButton.addEventListener('click',dot);


// draw dot, with origin at mouse click
var dot = function (e) {
    var xCord = coords['x'];
    var yCord = coords['y'];
    // formatting using back tick string
    console.log('Starting animation');
    drawDot(xCord,yCord);
};

// draw dot given x and y coords
var drawDot = function (x, y){
  // drawing an ellipse requires beginPath for the rendering context to
  // know where to start drawing the arc of the ellipse from
  ctx.beginPath();
  // ellipse params are (x, y, radiusX, radiusY, rotation, startAngle, endAngle)
  // for a full dot, endAngle should be 2pi radians
  ctx.ellipse(x, y, radius, radius, Math.PI/4, 0, 2 * Math.PI);
  // end with the fill method to fill the arc with the current fill color
  ctx.fill();
};
