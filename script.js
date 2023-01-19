let displayValue = 0;
let memoryValue;
let decimalFlag = false;
let operatorType;
//////////
let display = document.querySelector('#display');
let memory = document.querySelector('#memory');

//////////

//////////
function add(memoryValue, displayValue){
	return memoryValue + displayValue;
}

function subtract(memoryValue, displayValue){
	return memoryValue - displayValue;
}

function multiply(memoryValue, displayValue){
	return memoryValue * displayValue;
}

function divide(memoryValue, displayValue){
	if (displayValue === 0){
		return "Reality Breaks";
	}else
	return memoryValue / displayValue;
}
/////////
function operation(operator){
	decimalFlag = false;
	memory.innerHTML = displayValue;
	operatorType = operator + "()";
	//add operator type symbol to memval
	display.innerHTML = '';
	if (operatorType !== ''){
		equals();
		operation();
	}
}
/////////
function equals(){
	memory.innerHTML = operatorType;
	display.innerHTML = memory.innerHTML;
	// operatorType = ''; //is this needed??
	//done?	clear display values/mem values?
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
	displayValue = 0;
	memoryValue = 0;
	decimalFlag = false;
}
/////////
