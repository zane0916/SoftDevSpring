var newSlate = document.getElementById("clear");
var board = document.getElementById("slate");
var tool = document.getElementById("toggle");
var draw = board.getContext("2d");

newSlate.addEventListener('click', erase);

erase = draw.clearRect

drop.addEventListener('click', create);

create = drop.fillRect(10,10,10,20)
