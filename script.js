let display = document.querySelector('#display');
let memory = document.querySelector('#memory');
//////////
let displayValue = 0;
display.innerHTML = 0;
let memoryValue;
let hasDecimal = false;
let operatorType;
let result;
let opInProgress;
let resultDisplayed = false;
//////////
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
	hasDecimal = false;
	memory.innerHTML = displayValue + " " + symbol;
	memoryValue = displayValue;
	display.innerHTML = 0; //do I really want to clear display?

	opInProgress = true;

	operatorType = operator;
	return operatorType;
		////method one - on hold for now
}
/////////
function equals(type){
	switch(type){
		case "add":
			add(memoryValue, displayValue);
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
	clr("equalsType");
	displayValue = parseFloat(result.toFixed(9));
	display.innerHTML = parseFloat(result.toFixed(9));
	//rounds to 9 decimal places, and lops off extra zeroes
	result = displayValue;
	resultDisplayed = true;
	opInProgress = false;
	console.log("After hitting Equals, result var is: " + result + " and type is " + typeof result);
	console.log("After hitting Equals, opInProgress var is: " + opInProgress);
}
/////////
function keyedNumber(keyedNumber){
	if (opInProgress === false){
		displayValue = '';
		opInProgress = true;
	}
	if (display.innerHTML === "0"){
		display.innerHTML = '';
		console.log("IF sub-statement #1 (displayInnerHTML 0 was true) triggered")
	}
	if (display.innerHTML === "0."){
		display.innerHTML = '0.';
		console.log("IF sub-statement #2 (displayInnerHTML 0. was true) triggered")
	}
	////////
	if (resultDisplayed === true){
		display.innerHTML = '';
		resultDisplayed = false;
		console.log("IF sub-statement #3 (resultDisplayed flag was true) triggered")
	}
	//Over-writes the displayed result after hitting Equals, if you press a number.
	//E.G If display shows 2, and you press 5, it will erase 2 and show 5. As if a fresh start
	///////
	display.insertAdjacentText('beforeend', keyedNumber);
	displayValue = display.innerHTML
	Number(displayValue);
	result = Number(displayValue);
	console.log("After pressing number, displayValue is " + displayValue);
	console.log("After pressing number, displayInnerHTML is " + display.innerHTML);
	console.log("After pressing number, result is: " + result + " and type is " + typeof result);
	console.log("After pressing number, opInProgress is: " + opInProgress);
}
// Appends the keyed number to the right of any current numbers
// in the Display, and then sets the full Display value var
/////////
function decimal(){
	switch(hasDecimal){
		case false:
			hasDecimal = true;
			display.insertAdjacentText('beforeend', '.');
			displayValue = Number(display.innerHTML);
			console.log("After pressing decimal, displayValue is " + displayValue);
			console.log("After pressing decimal, displayInnerHTML is " + display.innerHTML);
			break;
		case true:
			break;
	}
}
/////////
function clr(type){
	if (type !== "equalsType"){
		result = 0;
		hasDecimal = false;
		//checks to see if the answer (after an Equals operation) has a decimal - if so, prevents you from adding another
	}
	display.innerHTML = "0";
	memory.innerHTML = '';
	displayValue = 0;
	memoryValue = 0;	
	operatorType = '';
	opInProgress = false;
	
}
/////////
/////////
/////////
/////////
window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "9": keyedNumber(9); break;
        case "8": keyedNumber(8); break;
        case "7": keyedNumber(7); break;
        case "6": keyedNumber(6); break;
        case "5": keyedNumber(5); break;
        case "4": keyedNumber(4); break;
        case "3": keyedNumber(3); break;
        case "2": keyedNumber(2); break;
        case "1": keyedNumber(1); break;
        case "0": keyedNumber(0); break;
        case "+": operation('add', '+'); break;
        case "-": operation('subtract', '-'); break;
        case "*": operation('multiply', '×'); break;
        case "/": operation('divide', '÷'); break;
        case ".": decimal(); break;
        case "Enter": equals(operatorType); break;
    }
})
///////////
//DARKMODE TOGGLE//
const toggleSwitch = document.querySelector('.darkmode-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);