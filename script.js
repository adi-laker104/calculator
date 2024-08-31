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

inputValues.forEach(element => {
    element.addEventListener("click", function() {   
        outputDiv.textContent += element.textContent;
    })
});
