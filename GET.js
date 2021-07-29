// ॐ
// global variable
// global rows and column
const row =7;
const column =4;
tUB = [1,2,3,4,5,6,7]
// bar
const bar =  document.getElementById("bar")
const barButton = document.getElementById(`show-hide`)
let barAnimationOccurence = true
let barAnimationTime = 0.3
// bar elements -> forms
const firstValue  = document.getElementById(`firstvalue`);
const secondValue = document.getElementById(`secondvalue`);
const operator    = document.getElementById(`operator`);
const ans	      = document.getElementById(`ans`);
let 	validOperation = true
// selecting input value elements
const value1  = document.getElementById(`value1`);
const value2  = document.getElementById(`value2`);
const value3  = document.getElementById(`value3`);
const value4  = document.getElementById(`value4`);
const value5  = document.getElementById(`value5`);
const value6  = document.getElementById(`value6`);
const value7  = document.getElementById(`value7`);
// beads movement time
let beadMovementTime = 0.5
// flash game difficulty
let fGD = 100
// selecting "flash games" button and sH button
let level1 = false;
let level2 = false;
let level3 = false;
let level4 = false;
// level = [level1 : false, level2 : false, level3 : false,   level4 : false,]
const fG = document.getElementById(`flashGame`);
const sH = document.getElementById(`sH`);
// storing generated Number
let gNum
let show = true
output = []
valueArray = [value1, value2, value3, value4, value5, value6, value7]
valueArrayNum = [Number(value1.value), Number(value2.value), Number(value3.value), Number(value4.value), Number(value5.value), Number(value6.value), Number(value7.value)]
var sum = 0

// key events
document.onkeydown = checkKey;
function checkKey(e) {
	// body...
	var event = window.event ? window.event : e;
	// console.log(event.keyCode);
	if (event.keyCode == `65`) {
		// key pressed is A
		getInputValue();
	} else if (event.keyCode == `82`) {
		// key pressed is R
		reset();
	} else if (event.keyCode == `72`) {
		// key pressed is H
		Sh();
	} else if (event.keyCode == `70`) {
		// key pressed is F
		flashGame(fGD);
	} else if (event.keyCode == `39`) {
		// key pressed is `->`
		barAnimationOccurence = true;
		showHide();
	} else if (event.keyCode == `37`) {
		// key pressed is `<-`
		barAnimationOccurence = false;
		showHide();
	} else if (event.keyCode == `67`) {
		// key pressed is C
		hardReset();
	} else if (event.keyCode == `86`) {
		// key pressed is V
		removeValue();
	}
}


function showHide() {
	// body...
	if (barAnimationOccurence == true) {
		bar.style.animation = `show ${barAnimationTime}s linear 1  forwards`;
		barButton.title = `close the bar`
		barAnimationOccurence = false;
		barButton.textContent = `<-`;
	} else if (barAnimationOccurence == false) {
		bar.style.animation = `hide ${barAnimationTime}s linear 1  forwards`;
		barButton.title = `Open Level selector and calculator`
		barAnimationOccurence = true;
		barButton.textContent = `->`;
	}
}

function getInputValue() {
	// body...
	reset()
	if (String(operator.value) == `add` && validOperation == true) {
		sum = Number(firstValue.value) + Number(secondValue.value);
		
	} else if(String(operator.value) == `min` && validOperation == true) {
		sum = Number(firstValue.value) - Number(secondValue.value);
		
	}
	var output = [],
  sNumber = sum.toString();
  if (sNumber.length < 7) {
			for (var w = sNumber.length + 1; w <= 7; w++) {
				output.push(+sNumber.charAt(w))
			}
		}
	for (var i = 0, len = sNumber.length; i < len; i += 1) {
		
    output.push(+sNumber.charAt(i));
	}
	puttingValue(output)
}

function puttingValue(sum) {
	// body...
	if (sum.length >= 8) {
		alert(`please enter a valid digit`)
	}
	for (var i = sum.length - 1; i >= 0; i--) {
		document.querySelector(`#value${i+1}`).value = String(sum[i]);
	}
	assignBead(sum)
}

function assignBead(sum) {
	// body...
	for (var i = sum.length; i >= 1; i--) {
		if (sum[i-1] <= -1 ) {
			alert(`please enter a valid digit`)
		} else if (sum[i-1] <= 4) {
			num = sum[i-1]
			for (var num = sum[i-1] ; num >= 1; num--) {
				document.querySelector(`.bead${num}Row${i}`).style.animation = `lowerbead ${beadMovementTime}s linear 1  forwards`;
				document.querySelector(`.bead${num}Row${i}`).children[0].children[0].style.animation = `color ${beadMovementTime}s linear 1  forwards`;
			}
		} else if (sum[i-1] >= 5) {
			let num = sum[i-1];
			document.querySelector(`.column-bead${i}`).style.animation = `upperBead ${beadMovementTime}s linear 1  forwards`;
			document.querySelector(`.column-bead${i}`).children[0].children[0].style.animation = `color ${beadMovementTime}s linear 1  forwards`;
			num = num - 5;
			for (w = num; w >= 1; w-- ) {
				document.querySelector(`.bead${w}Row${i}`).style.animation = `lowerbead ${beadMovementTime}s linear 1  forwards`;
				document.querySelector(`.bead${w}Row${i}`).children[0].children[0].style.animation = `color ${beadMovementTime}s linear 1  forwards`;
			}
		} 
	}
}
function clickity(argument) {
	// body...
	document.querySelector(`.reset-button`).style.animation = `clickReset ${beadMovementTime}s linear 1  forwards`;
}

function reset() {
	// body...
	for (var i = row ; i >=1; i--) {
		for (var w = column; w >=1; w--) {
			document.querySelector(`.bead${w}Row${i}`).style.animation = `reverselowerbead ${beadMovementTime}s linear 1  forwards`;
			document.querySelector(`.column-bead${i}`).style.animation = `reverseupperbead ${beadMovementTime}s linear 1  forwards`;
			document.querySelector(`.bead${w}Row${i}`).children[0].children[0].style.animation = `reversecolor ${beadMovementTime}s linear 1  forwards`;
			document.querySelector(`.column-bead${i}`).children[0].children[0].style.animation = `reversecolor ${beadMovementTime}s linear 1  forwards`;
		}
	};
	document.querySelector(`.reset-button`).style.animation = `clickReset ${beadMovementTime}s linear 1  forwards`;
}

function hardReset() {
	// body...
	valueArray.forEach(element => element.value = "0");
	firstValue.value = "";
	secondValue.value = "";
	reset();
}

function assignBeadGlobal() {
	// body...
	reset()
	for (var r= row; r >= 1; r--) {
		let val = document.querySelector(`#value${r}`);
		if (Number(val.value) <= 4) {
			num = Number(val.value)
			for (var n = num; n >= 1; n--) {
				document.querySelector(`.bead${n}Row${r}`).style.animation = `lowerbead ${beadMovementTime}s linear 1  forwards`;
				document.querySelector(`.bead${n}Row${r}`).children[0].children[0].style.animation = `color ${beadMovementTime}s linear 1  forwards`;
			}
		} else if (Number(val.value) >= 5) {
			document.querySelector(`.column-bead${r}`).style.animation = `upperBead ${beadMovementTime}s linear 1  forwards`;
			document.querySelector(`.column-bead${r}`).children[0].children[0].style.animation = `color ${beadMovementTime}s linear 1  forwards`;
			var decNum = Number(val.value) - 5;
			for (var dN = decNum; dN >= 1; dN--) {
				document.querySelector(`.bead${dN}Row${r}`).style.animation = `lowerbead ${beadMovementTime}s linear 1  forwards`;
				document.querySelector(`.bead${dN}Row${r}`).children[0].children[0].style.animation = `color ${beadMovementTime}s linear 1  forwards`;
			}
		}
	}
}

function assignBeadRT(argument) {
	// body...
	assignBeadGlobal()
}

function touchUpperBead(argument) {
	// body...
	let val = document.querySelector(`#value${argument}`);
	let num = Number(val.value)
	if (num <= 4 ) {
		val.value = num + 5
		assignBeadGlobal()
	} else if (num >= 5) {
		val.value = num -5
		assignBeadGlobal()
	}
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
	assignBeadGlobal()
}


function flashGameLevel(argument) {
	// body...
	if (argument <= 1) {
		fGD = 100;
		levelReset();
		document.querySelector(`#level1`).style.animation = `focused .1s linear 1 forwards`;

	} else if (argument <= 2) {
		fGD = 1000;
		levelReset();
		document.querySelector(`#level2`).style.animation = `focused .1s linear 1 forwards`;

	}else if (argument <= 3) {
		fGD =10000;
		levelReset();
		document.querySelector(`#level3`).style.animation = `focused .1s linear 1 forwards`;

	} else if (argument <= 4) {
		fGD = 1000000;
		levelReset();
		document.querySelector(`#level4`).style.animation = `focused .1s linear 1 forwards`;
	}
}
function levelReset(argument) {
	// body...
	for (var i = 4; i >= 1; i--) {
		document.querySelector(`#level${i}`).style.animation = `unfocused .3s linear 1 forwards`
	}
}

function flashGame(argument) {
	// body...
	hardReset()
	sH.textContent = `hide`
	gNum =  Math.floor((Math.random() * argument) + 1);
	console.log(gNum, argument)
	firstValue.value = gNum;
	getInputValue();
	valueArray.forEach(element => element.value = `0`)
}

fG.addEventListener("click", function() {
	flashGame(fGD);
});

function Sh(){
	let num = firstValue.value;
	if (num == 0) {
		firstValue.value = String(gNum);
		sH.textContent = `hide`;
		getInputValue();
	} else {
		hardReset();
		sH.textContent = `show`
	}
}
function highlight(argument) {
	// body...
	// const element = document.querySelector(`${argument}`).style;
	// element.backgroundColor =  "#6eb9f7";
	// element.backgroundSize =  `100%`;
	// element.transition = `background 7s`;
	// element.animation = `globalhighlight 2s linear 3`;
}

document.querySelector(`.ripple`).addEventListener(`click`, function() {
	document.querySelector(`#docs`).style.animation = `rippleDocs 2s linear 1 forwards`
});
document.querySelector(`#check`).addEventListener(`click`, function() {
	let num = document.querySelector(`#guessInput`);
	if (num.value == 24) {
		alert(`correct`)
	} else {
		alert(`try again`)
	}
});

let valueOpacity = 1;
function removeValue() {
	// body...
	if (valueOpacity <= 1) {
		document.querySelector(`#bottomValue`).style.display = `none`;
		document.querySelector(`.hide-value`).textContent = `show value`;
		valueOpacity = 2
	} else if (valueOpacity >= 2) {
		valueOpacity = 1
		document.querySelector(`#bottomValue`).style.display = `flex`;
		document.querySelector(`.hide-value`).textContent = `hide value`;
	}
}

document.querySelector(`#Cross`).addEventListener(`click`, function() {
	document.getElementById('pageZero').style.display = `none`;
});
