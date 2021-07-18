console.log("GET")

document.onkeydown = checkKey;

function checkKey(e) {
    var event = window.event ? window.event : e;
    console.log(event.keyCode)
    if (event.keyCode == '67') {
    	// alert("k is finally pressed")
    	hardReset()
    } else if (event.keyCode == '65')
     {getInputValue()
    } else if (event.keyCode == '82') {
    	reset()
    } else if (event.keyCode == '70') {
    	f()
    }
  }
//document.getElementById("finalAns").addEventListener("click", console.log(`fv: ${document.getElementById("firstValue")}`))

let sum = 0;

function getInputValue() {
	// Selecting the input element and get its value 
	let firstValue = Number(document.getElementById("firstValue").value);
	let secondValue = Number(document.getElementById("secondValue").value);
	let operator = String(document.getElementById("operator").value);
	let b1 = document.getElementById("value1");
	let b2 = document.getElementById("value2");
	let b3 = document.getElementById("value3");
	let b4 = document.getElementById("value4");
	//b = [b4:]
	array = [b1, b2, b3, b4]
	// Displaying the value
	//alert(`firstValue:${firstValue}, secondValue:${secondValue}, operator:${operator} `);
	console.log(typeof firstValue, typeof secondValue, typeof operator)

	if (operator == 'add') {
		sum = firstValue + secondValue
		console.log(sum);
		// break
	} else {
		sum = firstValue - secondValue
		console.log(sum)
	}
	
  var output = [],
  sNumber = sum.toString();
  if (sNumber.length < 4) {
			for (var w = sNumber.length + 1; w <= 4; w++) {
				output.push(+sNumber.charAt(w))
			}
		}
	for (var i = 0, len = sNumber.length; i < len; i += 1) {
		
    output.push(+sNumber.charAt(i));
	}
  //output.reverse()
 //  let outputForDummy = output;
	// return outputForDummy;
	// // return firstValueBoi = firstValue;
	// // return secondValueBoi = secondValue;	
 //  console.log(output)
  puttingValue(output, array)
}
let globallyGeneratedVariable

function generate(argument) {
	// body...
	// console.log("random")
	var fVNum = Math.floor((Math.random() * 100) + 1);
	globallyGeneratedVariable = fVNum
	console.log(fVNum)
	document.getElementById("firstValue").value = String(fVNum)
	getInputValue()
	document.getElementById("f").textContent = "hide"
}
// var fVNum2 = fVNum
function f() {
	// body...
	var fV = document.getElementById("firstValue")
	var num = fV.value
	// let fVNum = 7
	if (num == 0) {
		fV.value = globallyGeneratedVariable
		console.log('f1', globallyGeneratedVariable)
		document.getElementById("f").textContent = 'hide'
		getInputValue()
	} else {
		hardReset()
		document.getElementById("f").textContent = 'show'
	}
}

//console.log(`sum otside function: ${sum}`)
function puttingValue(sum, valueArray) {
	// body...
	for (var i = sum.length - 1; i >= 0; i--) {
		console.log(sum[i+1], "i:",i)
		let valueShowcase = document.querySelector(`#value${i+1}`);
		valueShowcase.value = String(sum[i])
	}
	assignBead()
}



function assignBead() {
	// body...
	reset()
	let b1 = document.getElementById("value1");
	let b2 = document.getElementById("value2");
	let b3 = document.getElementById("value3");
	let b4 = document.getElementById("value4");
	let v = [b1, b2, b3, b4]
	reset(v, false)
	let b = [ Number(b1.value), Number(b2.value), Number(b3.value), Number(b4.value)
		// {"b1" : b1}, 
		// {"b2" : b2}, 
		// {"b3" : b3}, 
		// {"b4" : b4} 
	]
	let f = [{"b1":""}, {"b2":""}, {"b3":""}, {"b4":""}]
	console.log(b)
	// if (b1 || b2 || b3 || b4 >9 || b1 || b2 || b3 || b4 < 0  ) {
	// 	alert("please enter valid digit");
	// 	b.forEach(element => element.value = "0")
	// } else {
	// 	console.log("Pass")
	// }
	// if (b.forEach() > 9) {
	// 	alert("hmmmmmmm")
	// }
	//console.log(b)
	for (var i = b.length + 1; i >= 0; i--) {
		//console.log(b[i])
		if (b[i] > 9 || b[i] < 0) {//console.log("Fail");
			alert("please enter valid digit");
			hardReset()
			// for (var w = v.length - 1; i <= 0; i++) {
			// 	//changeValue(v[w])
			// 	v[w].value = "7";
			// 	console.log(v[w].value);
			// }
			v.forEach(element => element.value = "0")
			break
		} else if(b[i] > 4) {
			console.log("Seperate", b[i])
			// v[i] = 5 + b[i]-5
			// console.log(v[i])
			f[i] = 5;
			let u = document.querySelector(`.column-bead${i+1}`);
			u.style.animation = "moveUpperBead .35s linear 1 forwards"
			u.children[0].children[0].style.animation = "changingColor .35s linear 1 forwards"
			//u.style.transform = "translateY(40%)"
			//u.children[0].children[0].style.fill = "#D2042D"
			f[i] = b[i]-5
			let ip = i
			movingLowerBead(f[i], f, ip)
			// for (var i = f.length - 1; i >= 0; i--) {
			// 	console.log(f[i])
			// }
			console.log(f)
		} else if(b[i] <= 4){
			console.log("less than/ equal to 4")
			ip = b[i]
			gg = i
			console.log("ip:",ip)
			movingLowerBead4(b[i], f, ip, gg)
		}
	}
}


function movingLowerBead(argument, f, ip) {
	console.log('f:',f)
	// body...
	for (var i = f[ip] - 1; i >= 0; i--) {
		console.log("argument:" ,argument);
		console.log('ip:',ip);
		console.log("i:", i);
		var selectedLowerColumn = document.querySelector(`.bead${i+1}Row${ip+1}`)
		console.log(selectedLowerColumn)
		selectedLowerColumn.style.animation = "movingLowerBead .35s linear 1 forwards"
		selectedLowerColumn.children[0].children[0].style.animation = "changingColor .35s linear 1 forwards"
		//selectedLowerColumn.style.transform = "translateY(60%)"
		//selectedLowerColumn.children[0].children[0].style.fill = "#D2042D"
		//document.querySelector(`bead${i}row1`).style.transform = "translateY(-40%)"
	}
}


function movingLowerBead4(argument, f, ip, gg) {
	console.log('f:',f)
	// body...
	for (var i = ip - 1; i >= 0; i--) {
		console.log("argument:" ,argument);
		console.log('ip:',ip);
		console.log("i:", i);
		var selectedLowerColumn = document.querySelector(`.bead${i+1}Row${gg+1}`)
		//console.log(selectedLowerColumn)
		selectedLowerColumn.style.animation = "movingLowerBead .35s linear 1 forwards"
		selectedLowerColumn.children[0].children[0].style.animation = "changingColor .35s linear 1 forwards"
		//selectedLowerColumn.style.transform = "translateY(60%)"
		//selectedLowerColumn.children[0].children[0].style.fill = "#D2042D"
		//u.children[0].children[0].style.fill = "#D2042D"
		//document.querySelector(`bead${i}row1`).style.transform = "translateY(-40%)"
	}
}

function reset() {
	// body...
	//document.querySelector(".bead").style.transform = "translateY(190%)"
	// if (hardreset =  true) {
	// 	v[1].value = "0"
	// 	v[2].value = "0"
	// 	v[3].value = "0"
	// 	v[4].value = "0"
	// }
	
	//sum = 0
	var row = 4;
	var column = 4;
	for (var i = row - 0; i >= 1; i--) {
	// Things[i]
	
	for (var w = column - 0; w >= 1; w--) {
		//console.log(`row:${i};column${w}`);
		console.log("reseting")
		var selectedColumn = document.querySelector(`.bead${i}Row${w}`);
		selectedColumn.style.animation = "reverseMovingLowerBead .35s linear 1 forwards"
		//selectedColumn.style.transform = "translateY(190%)"
		selectedColumn.children[0].children[0].style.animation = "reverseChangingColor .35s linear 1 forwards"
		
		var selectedUpperColumn = document.querySelector(`.column-bead${w}`);
		console.log(w)
		console.log(selectedUpperColumn)
		selectedUpperColumn.style.animation = "reverseMoveUpperBead .35s linear 1 forwards"
		//selectedUpperColumn.style.transform = "translateY(10%)"
		selectedUpperColumn.children[0].children[0].style.animation = "reverseChangingColor .35s linear 1 forwards"
		
		//console.log(selectedColumn);
	}
	

	}

}

function hardReset() {
	// body...
	// globallyGeneratedVariable = 0;
	document.getElementById("value1").value = "0"
	document.getElementById("value2").value = "0"
	document.getElementById("value3").value = "0"
	document.getElementById("value4").value = "0"
	document.getElementById("firstValue").value = ""
	document.getElementById("secondValue").value = ""
	sum = 0 
	var row = 4;
	var column = 4;
	for (var i = row - 0; i >= 1; i--) {
	// Things[i]
	
	for (var w = column - 0; w >= 1; w--) {
		//console.log(`row:${i};column${w}`);
		console.log("reseting")
		var selectedColumn = document.querySelector(`.bead${i}Row${w}`);
		selectedColumn.style.animation = "reverseMovingLowerBead .35s linear 1 forwards"
		//selectedColumn.style.transform = "translateY(190%)"
		selectedColumn.children[0].children[0].style.animation = "reverseChangingColor .35s linear 1 forwards"
		var selectedUpperColumn = document.querySelector(`.column-bead${w}`);
		console.log(w)
		console.log(selectedUpperColumn)
		selectedUpperColumn.style.animation = "reverseMoveUpperBead .35s linear 1 forwards"
		reset()
		//selectedUpperColumn.style.transform = "translateY(10%)"
		//selectedUpperColumn.children[0].children[0].style.fill = "FFD700"
		//console.log(selectedColumn);
	}
	

	}
}

function assignBeadRT() {
	// body...
	reset()
	let b1 = document.getElementById("value1");
	let b2 = document.getElementById("value2");
	let b3 = document.getElementById("value3");
	let b4 = document.getElementById("value4");
	let v = [b1, b2, b3, b4]
	reset(v, false)
	let b = [ Number(b1.value), Number(b2.value), Number(b3.value), Number(b4.value)
		// {"b1" : b1}, 
		// {"b2" : b2}, 
		// {"b3" : b3}, 
		// {"b4" : b4} 
	]
	let f = [{"b1":""}, {"b2":""}, {"b3":""}, {"b4":""}]
	// console.log(b)
	// if (b1 || b2 || b3 || b4 >9 || b1 || b2 || b3 || b4 < 0  ) {
	// 	alert("please enter valid digit");
	// 	b.forEach(element => element.value = "0")
	// } else {
	// 	console.log("Pass")
	// }
	// if (b.forEach() > 9) {
	// 	alert("hmmmmmmm")
	// }
	//console.log(b)
	for (var i = b.length + 1; i >= 0; i--) {
		//console.log(b[i])
		if (b[i] > 9 || b[i] < 0) {//console.log("Fail");
			alert("please enter valid digit");
			hardReset()
			// for (var w = v.length - 1; i <= 0; i++) {
			// 	//changeValue(v[w])
			// 	v[w].value = "7";
			// 	console.log(v[w].value);
			// }
			v.forEach(element => element.value = "0")
			break
		} else if(b[i] > 4) {
			// console.log("Seperate", b[i])
			// v[i] = 5 + b[i]-5
			// console.log(v[i])
			f[i] = 5;
			let u = document.querySelector(`.column-bead${i+1}`);
			u.style.animation = "moveUpperBead .35s linear 1 forwards"
			u.children[0].children[0].style.animation = "changingColor .35s linear 1 forwards"
			//u.style.transform = "translateY(40%)"
			//u.children[0].children[0].style.fill = "#D2042D"
			f[i] = b[i]-5
			let ip = i
			movingLowerBead(f[i], f, ip)
			// for (var i = f.length - 1; i >= 0; i--) {
			// 	console.log(f[i])
			// }
			// console.log(f)
		} else if(b[i] <= 4){
			console.log("less than/ equal to 4")
			ip = b[i]
			gg = i
			console.log("ip:",ip)
			movingLowerBead4(b[i], f, ip, gg)
		}
	}
}

function touchUpperBead(column) {
	// body...
	let boi =  document.querySelector(`#value${column}`) 
	let bvhvgb = 0
	if (boi.value < "5") {
		bvhvgb = Number(boi.value) + 5
	} else if (boi.value > "5") {
		bvhvgb = boi.value - 5
	}
	else {bvhvgb = 0}
	boi.value = bvhvgb
	
	assignBead()
}
function touchBead(column, row) {
	let val = document.querySelector(`#value${row}`)
	let columnChangedValue = "0"
	if (val.value >= "5") {
		if (val.value - 5 >= String(column) ) {
			columnChangedValue = column -1 + 5
		} else {
			columnChangedValue = column + 5	
		}
	} else if (val.value == String(column) || val.value >= String(column)) {
		columnChangedValue = column - 1
	} else {
		columnChangedValue = column
	}
	val.value = columnChangedValue
	console.log(row, val.value, column)
	assignBead()
}


function dummy() {
	// body...
	changeArray = []
	let firstValueBoi = document.querySelector(`#firstValue`)
	let secondValueBoi = document.querySelector(`#secondValue`)	
	let operator = String(document.getElementById("operator").value);
	if (operator == 'add') {
		sum = Number(firstValueBoi.value) + Number(secondValueBoi.value)
		// console.log(sum);
		// break
	} else {
		sum = Number(firstValueBoi.value) - Number(secondValueBoi.value)
		// console.log(sum)
	}

	// let outputForDummy =  
	// console.log(firstValueBoi.value)
	// console.log(sum)
	stringify(firstValueBoi.value, changeArray)
	console.log(changeArray)
	if (secondValueBoi.value < 5) {
		stringify(5, changeArray)
		stringify(secondValueBoi -5, changeArray)
	} 
	
}


function stringify(argument, pushRequest) {
	// body...
	  var output = [],
  sNumber = argument.toString();
  if (sNumber.length < 4) {
			for (var w = sNumber.length + 1; w <= 4; w++) {
				output.push(+sNumber.charAt(w))
			}
		}
	for (var i = 0, len = sNumber.length; i < len; i += 1) {
		
    output.push(+sNumber.charAt(i));
	}
	// realValue.push(output)
	pushRequest.push(output)
	// console.log(pushRequest)

}


let globalAnimation = true;

function showHide(argument) {
	// body...
	if (globalAnimation == false) {
		document.getElementById("firstValue").style.animation = "show 1s linear 1  forwards";
		document.getElementById("secondValue").style.animation = "show 1s linear 1  forwards";
		document.getElementById("reset").style.animation = "show 1s linear 1  forwards";
		document.getElementById("finalAns").style.animation = "show 1s linear 1  forwards";
		document.getElementById("generate").style.animation = "show 1s linear 1  forwards";
		document.getElementById("operator").style.animation = "show 1s linear 1  forwards";
		document.getElementById("showHide").textContent = '<'
		globalAnimation = true;
		// alert('false')
	} else if (globalAnimation == true){
		document.getElementById("firstValue").style.animation = "Hide 1s linear 1 forwards";
		document.getElementById("secondValue").style.animation = "Hide 1s linear 1 forwards";
		document.getElementById("reset").style.animation = "Hide 1s linear 1 forwards";
		document.getElementById("finalAns").style.animation = "Hide 1s linear 1 forwards";
		document.getElementById("generate").style.animation = "Hide 1s linear 1 forwards";
		document.getElementById("operator").style.animation = "Hide 1s linear 1 forwards";
		document.getElementById("showHide").textContent = '>'

		globalAnimation = false;
		// alert('true')
	}
	console.log(globalAnimation)
}


if (screen.width >= 812) {
	document.getElementById("form").style.transform = "translateX(-125px)"
	document.getElementById("form").style.gridTemplateColumns = "repeat(3, 30px);"
	document.getElementById("form").style.gridAutoRows = " 20px;"	
} else if (screen.width >= 375) {
	document.getElementById("form").style.transform = "translate(30%, -120%)";
	document.getElementById("form").style.gridTemplateColumns = "repeat(3, 50px);"
	document.getElementById("form").style.gridAutoRows = " 40px;"
}

if (screen.height == 667) {
	document.getElementById("form").style.transform = "translate(50%, -110%)";
	document.getElementById("form").style.gridAutoRows = " 30px;"
} else if (screen.height == 1024 && screen.width ==1366 ) {
	document.getElementById("form").style.transform = "translate(115%, 310%)"
	document.getElementById("container").style.height = "50vh"
} else if (screen.height == 1366 && screen.width == 1024) {
	document.getElementById("form").style.transform = "translate(175%, 400%)"
	document.getElementById("container").style.height = "50vh"
}