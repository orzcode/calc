let display = document.querySelector('#display');
let memory = document.querySelector('#memory');
//////////
let displayValue = 0;
let memoryValue;
let decimalFlag = false;
let operatorType;
//////////
// memory.innerHTML = memoryValue;
// display.innerHTML = displayValue;
////////////////////////////
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
///////////////////////////
// function symbolReturner(symbolName){
// 	switch(symbolName){
// 		case "add":
// 			return "+";
// 		case "divide":
// 			return "÷";
// 		case "multiply":
// 			return "x";
// 		case "subtract":
// 			return "-";
// 	}
// }
///////////////////////////
function operation(operator, symbol){
	decimalFlag = false;
	memory.innerHTML = displayValue + symbol;
	memoryValue = displayValue;
	display.innerHTML = '';
	operatorType = operator;
	return operatorType;
	//code goes here
}
/////////
function equals(){
	console.log(operatorType);
	// memory.innerHTML = operatorType;
	// display.innerHTML = memory.innerHTML;
	// operatorType = ''; //is this needed??
	//done?	clear display values/mem values?
	/// 		dogshit ass code that doesn't work
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
