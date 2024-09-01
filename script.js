//Output value holder
const outputDiv = document.getElementById("outputDiv");


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


//Add, Subtract, Multiply, Divide Functions

function add (a,b) {
    return Math.round(10*(a + b))/10;
}

function subtract (a,b) {
    return Math.round(10*(a - b))/10;
}

function multiply (a,b) {
    return Math.round(10*(a * b))/10;
}

function divide (a,b) {
    return Math.round(10*(a / b))/10;
}

//Input Button Logic
const inputValues = document.querySelectorAll(".input");
const dotValues = document.querySelectorAll(".dot");
const operatorValues = document.querySelectorAll(".operator");


let firstInput = 0;
let secondInput = 0;
let opCounter = 0;
let operatorVal = "";
let clearInput = false;


inputValues.forEach(element => {
    element.addEventListener("click", function() {  
        if (clearInput) {
            outputDiv.textContent = "";
            clearInput = false;
        }
        outputDiv.textContent += element.textContent;
        
    })
});


operatorValues.forEach(operation => {   
    operation.addEventListener("click",function() {
        if (opCounter % 2 == 0) {
            firstInput = +outputDiv.textContent;
            console.log(firstInput);
            operatorVal = operation.id;
            clearInput = true;
        }
        else {
            secondInput = +outputDiv.textContent;
            outputDiv.textContent = operate(operatorVal, firstInput, secondInput);
            clearInput = false;
        }
        opCounter++;
    })

});

dotValues.forEach(element => {
    element.addEventListener("click", function() {   
        if (outputDiv.textContent.indexOf(".") == -1)
             {
                outputDiv.textContent += element.textContent;
        }
    })
});


function operate(operator, a, b) {
    if (operator == "add_button") {
        return add(+a,+b);
    }

    if (operator == "multiply_button") {
        return multiply(+a,+b);
    }

    if (operator == "subtract_button") {
        return subtract(+a,+b);
    }

    if (operator == "divide_button") {
        return divide(+a,+b);
    }
    
}


//AC Button Logic

const clearButton = document.getElementById("clear");

clearButton.addEventListener("click", function() {   
    outputDiv.textContent = "";
    firstInput = 0;
    secondInput = 0;
    clickCounter = 0;
    opCounter = 0;
    operatorVal = "";
    clearInput = false;
});