//Output value holder
const outputDiv = document.getElementById("outputDiv");

//AC Button Logic

const clearButton = document.getElementById("clear");

clearButton.addEventListener("click", function() {   
    outputDiv.textContent = "";
});

// +/- Button Logic

const changeSignButton = document.getElementById("change_sign");
let i = 0;
changeSignButton.addEventListener("click", function() {
    if (i % 2 == 0) {
    outputDiv.textContent = "-" + outputDiv.textContent;
    } 
    else {
        outputDiv.textContent = 
        outputDiv.textContent.substring(1,outputDiv.textContent.length);
    }
    i++;
});


//Input Button Logic
const inputValues = document.querySelectorAll(".input");
const dotValues = document.querySelectorAll(".dot");
let dotIndex = 0;

inputValues.forEach(element => {
    element.addEventListener("click", function() {   
        outputDiv.textContent += element.textContent;
    })
});

dotValues.forEach(element => {
    element.addEventListener("click", function() {   
        if (dotIndex == 0 ) {
        //console.log(dotValues);
        outputDiv.textContent += element.textContent;
        }
        dotIndex++;
    })
});

//Add, Subtract, Multiply, Divide Functions

function add (a,b) {
    return a + b;
}

function subtract (a,b) {
    return a - b;
}

function multiply (a,b) {
    return a * b;
}

function divide (a,b) {
    return a / b;
}

//Variable creation for first and second input number
let firstInput = 0;
let clickCounter = 0;
let operatorVal = "";
const operatorValues = document.querySelectorAll(".operator");
const equalButton = document.getElementById("equal_button");
operatorValues.forEach(operation => {   
    operation.addEventListener("click",function() {
        if (clickCounter % 2 == 0) 
            {
            operatorVal = operation.id;
            console.log(operatorVal);
            firstInput = outputDiv.textContent;
            outputDiv.textContent = "";
            }

        else {
            secondInput = outputDiv.textContent;
            outputDiv.textContent = "";
        }
        clickCounter++;
    })

});