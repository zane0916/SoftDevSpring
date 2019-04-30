var data = JSON.parse("data.json");

var totalAsian = data.reduce(function(a,b) {
    if(b.asian_num=="0"){
	return a
    }
    return a + b.asian_num
},0)

var senior = data.filter(function(n) {
    return n.grade1 > 0 || n.grade2 > 0 || n.grade3 > 0 || n.grade4 > 0 || n.grade5 > 0 && n.grade6 == 0 && n.grade7 == 0 && n.grade8 == 0 && n.grade9 == 0 && n.grade10 == 0 && n.grade11 == 0 && n.grade12 == 0})

var male = data.filter(function(n) {
    return n.male_per > n.female_per})

var asianNum = document.getElementById("asian")
asianNum.innerHTML = totalAsian
var numEle = document.getElementById("elementary")
numEle.innerHTML = elementary.length
var numMale = document.getElementById("male")
numMale.innerHTML = male.length
