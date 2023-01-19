let displayValue = 0;
let memoryValue;
let decimalFlag = false;
//////////
let display = document.querySelector('#display');
let memory = document.querySelector('#memory');

//////////

//////////
function add(value1, value2){
	return value1 + value2;
}

function subtract(value1, value2){
	return value1 - value2;
}

function multiply(value1, value2){
	return value1 * value2;
}

function divide(value1, value2){
	if (value2 === 0){
		return "Reality Breaks";
	}else
	return value1 / value2;
}
/////////
function operate(operator, value1, value2){
	return operator(value1, value2);
}
/////////
function keyedNumber(keyedNumber){
	display.insertAdjacentText('beforeend', keyedNumber);
	displayValue = display.innerHTML
}
// Appends the keyed number to the right of any current numbers
// in the Display, and then sets the full Display value var
/////////
function decimal(){
	switch(decimalFlag){
		case false:
			decimalFlag = true;
			display.insertAdjacentText('beforeend', '.');
			displayValue = display.innerHTML
			break;
		case true:
			break;
	}
}
/////////
function clr(){
	display.innerHTML = "";
	memory.innerHTML = "";
	decimalFlag = false;
}
/////////
