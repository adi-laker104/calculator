//AC Button Logic

const clearButton = document.getElementById("clear");
const output = document.getElementById("outputDiv");

clearButton.addEventListener("click", function() {
    const outputDiv = document.getElementById("outputDiv");
    outputDiv.textContent = "";
});

