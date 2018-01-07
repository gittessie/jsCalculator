/*
 * Implement all your JavaScript in this file!
 */
 
 var currNum = ""; 
 var prevNum = 0;
 var operation = ""; 
 var displayField = $("input[name='display']");
 var lastButtonWasEquals = false; 
 var lastButtonWasOperation = false; //make sure no values change if multiple operations are hit in a row
 
 function clickNum() {
	if(lastButtonWasEquals){
		currNum = "";
		prevNum = 0; 
		operation = ""; 
	}
	currNum += $(this).val(); 
	//displayField.prop('disabled', false);
	displayField.val(currNum);
	lastButtonWasEquals = false; 
	lastButtonWasOperation = false; 
}

function performOpp(){
	if(operation == "+"){
		prevNum = prevNum + Number(currNum); 
	}
	else if(operation == "-"){
		prevNum = prevNum - Number(currNum); 
	}
	else if(operation == "*"){
		prevNum = prevNum * Number(currNum); 
	}
	else if(operation == "/"){
		prevNum = prevNum / Number(currNum); 
	}
	else{ //no operations previously stored 
		prevNum = Number(currNum); 
	}
}

function clickOpp(hit){
	if(!lastButtonWasEquals && !lastButtonWasOperation){
	performOpp(); 
	}
	displayField.val(prevNum);
	currNum = ""; 
	operation = hit; 
	lastButtonWasEquals = false;
	lastButtonWasOperation = true; 
}

function clickAdd() {
	clickOpp("+"); 
}

function clickSub() {
	clickOpp("-");  
}

function clickMul() {
	clickOpp("*");  
}

function clickDiv() {
	clickOpp("/"); 
}

function clickEquals(){
	if(!lastButtonWasOperation){
		performOpp(); 
		displayField.val(prevNum);
		lastButtonWasEquals = true; 
		lastButtonWasOperation = false;
	}
}

function clickClear(){
	currNum = ""; 
	prevNum = 0;
	operation = "";
	displayField.val(currNum);
	lastButtonWasEquals = false; 
	lastButtonWasOperation = false;
}

$('#button1').click(clickNum);
$('#button2').click(clickNum);
$('#button3').click(clickNum);
$('#button4').click(clickNum);
$('#button5').click(clickNum);
$('#button6').click(clickNum);
$('#button7').click(clickNum);
$('#button8').click(clickNum);
$('#button9').click(clickNum);
$('#button0').click(clickNum);

$('#addButton').click(clickAdd);
$('#subtractButton').click(clickSub);
$('#multiplyButton').click(clickMul);
$('#divideButton').click(clickDiv);

$('#equalsButton').click(clickEquals);
$('#clearButton').click(clickClear);