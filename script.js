let displayValue;
let memoryValue;
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
}
/////////
function clr(){
	display.innerHTML = "";
	memory.innerHTML = "";
}
/////////
