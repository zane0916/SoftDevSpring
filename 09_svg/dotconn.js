/*
Zane Wang
SoftDev2 pd8
K09 -- Connect the Dots
2019-03-12
*/

var slate = document.getElementById("vimage");
var clear = document.getElementById("clear");

var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");

c.setAttribute("cx",evt.clientX);
c.setAttribute("cy",evt.clientY);

c.setAttribute("r", "100");
c.setAttribute("fill", "red");
c.setAttribute("stroke","black");

slate.addEventListener("click", function() {
    slate.appendChild(c);
});

clear.addEventListener("click", function() {
    while slate.length > 0 {
	slate.remove()
    }
}
