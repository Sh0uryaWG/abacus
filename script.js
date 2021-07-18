// importing elements
// const container = document.querySelector("#container");
// const upperBeadRow1 = document.querySelector(".column-bead4");
// const value1 = document.querySelector(".numberRow1")
// const value2 = document.querySelector(".numberRow2")
// const value3= document.querySelector(".numberRow3")
// const value4= document.querySelector(".numberRow4")
// testing the presence
//console.log(container);
//console.log(upperBeadRow1);

// Moving selected elements

// upperBeadRow1.style.transform = "translateY(40%)";
var column = 4
var row = 4

//console.log(`value of column:${column},row:${row}`)

// for (var i = Things - 0; i >= 1; i--) {
// 	// Things[i]
// 	console.log(i)
// 	var column = `.bead1Row${i}`
// 	console.log(column)
// 	const selectedColumn = document.querySelector(column) 
// 	console.log(selectedColumn)

// }


for (var i = row - 0; i >= 1; i--) {
	// Things[i]
	
	for (var w = column - 0; w >= 1; w--) {
		//console.log(`row:${i};column${w}`);
		var selectedColumn = document.querySelector(`.bead${i}Row${w}`);
		//console.log(selectedColumn);
	}
	

}

// console.log(value1)
// console.log(value2)
// console.log(value3)
// console.log(value4)	

// function loweColumnBeads() {
// 	// body...

// }

//value1.innerHTML = "boi"

// function changingDigit(numOrder, changedNum) {
// 	// body...
// 	const digitOrder = "value"+numOrder;
// 	console.log(digitOrder, changedNum);
// 	console.log(type)
// 	digitOrder.innerHTML = "changedNum";

// }

// changingDigit(2, "yo")


// function changingDigit(numOrder, changedNum) {
// 	// body...
// 	// changes the digit in HTML
// 	const y = document.querySelector(`.numberRow${numOrder}`)
// 	console.log("change:",y)
// 	y.innerHTML = changedNum
// }



//changingDigit(2, "3") //calling func.

console.log(document.getElementById("firstValue").value)

function extPost() {
	// body...
	const q = document.getElementById("firstValue").value
	console.log("q:",q, "gg-2")
	changingDigit(3, q)
	// document.getElementById("finalAns").style.backgroundColor = "red";
}


//document.getElementById("finalAns").addEventListener("click", (extPost(), console.log("gg")))










	// // body...
	// document.getElementById("value1").value = "0"
	// document.getElementById("value2").value = "0"
	// document.getElementById("value3").value = "0"
	// document.getElementById("value4").value = "0"
	// document.getElementById("firstValue").value = ""
	// document.getElementById("secondValue").value = ""

	// var row = 4;
	// var column = 4;
	// for (var i = row - 0; i >= 1; i--) {
	// // Things[i]
	
	// 	for (var w = column - 0; w >= 1; w--) {
	// 		//console.log(`row:${i};column${w}`);
	// 		// console.log("reseting")
	// 		var selectedColumn = document.querySelector(`.bead${i}Row${w}`);
	// 		selectedColumn.style.animation = "reverseMovingLowerBead .35s linear 1 forwards"
	// 		//selectedColumn.style.transform = "translateY(190%)"
	// 		selectedColumn.children[0].children[0].style.animation = "reverseChangingColor .35s linear 1 forwards"
	// 		var selectedUpperColumn = document.querySelector(`.column-bead${w}`);
	// 		// console.log(w)
	// 		// console.log(selectedUpperColumn)
	// 		selectedUpperColumn.style.animation = "reverseMoveUpperBead .35s linear 1 forwards"
	// 		reset();
	// 		//selectedUpperColumn.style.transform = "translateY(10%)"
	// 		//selectedUpperColumn.children[0].children[0].style.fill = "FFD700"
	// 		//console.log(selectedColumn);
	// 	};
	


	// };






