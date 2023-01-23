let display = document.querySelector('#display');
let memory = document.querySelector('#memory');
//////////
let displayValue = 0;
let memoryValue;
let decimalFlag = false;
let operatorType;
let result;
//////////
// memory.innerHTML = memoryValue;
// display.innerHTML = displayValue;
////////////////////////////
function add(value1, value2){
	result = Number(value1) + Number(value2);
	return result;
}
function subtract(value1, value2){
	result = Number(value1) - Number(value2);
	return result;
}
function multiply(value1, value2){
	result = Number(value1) * Number(value2);
	return result;
}
function divide(value1, value2){
	if (Number(value2) === 0){
		display.innerHTML = "Reality Breaks!";
	}else
	result = Number(value1) / Number(value2);
	return result;
}
///////////////////////////
function operation(operator, symbol){
	decimalFlag = false;
	memory.innerHTML = displayValue + symbol;
	memoryValue = displayValue;
	display.innerHTML = ''; //do I really want to clear display?

	operatorType = operator;
	return operatorType;
		////method one - on hold for now
}
/////////
function equals(type){
	switch(type){
		case "add":
			console.log(add(memoryValue, displayValue));
			break;
		case "subtract":
			subtract(memoryValue, displayValue);
			break;
		case "multiply":
			multiply(memoryValue, displayValue);
			break;
		case "divide":
			divide(memoryValue, displayValue);
			break;
	}
	clr();
	displayValue = result;
	display.innerHTML = result;
	console.log("result is probably zero:" + result);
}
/////////
function keyedNumber(keyedNumber){
	display.insertAdjacentText('beforeend', keyedNumber);
	displayValue = display.innerHTML
	Number(displayValue);
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
	operatorType = '';
}
/////////
