// TODO: press keyboard keys to input
// del button to delete last input

// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
    document.getElementById("equation").value = "";
}

// This function display input values
function displayInput(value) {
    document.getElementById("equation").value += value;
}

// This function evaluates the expression and returns result
function calculate() {
    var exp = document.getElementById("equation").value;

    // use AJAX function to evaluate the result :)
    document.getElementById("result").value = math.evaluate(exp);
}


// Get the elements have (num) class
var numButtons = document.querySelectorAll(".num");

// loop through all numButtons
for (let i = 0; i < numButtons.length; i++) {

    // add event listenter to the element to check if it pressed or not
    numButtons[i].addEventListener("click",function () {displayInput(this.value)});
}

// clear the equation and result when press ( C ) button
document.getElementById("clear").addEventListener("click",_ => clearScreen())

// Get result of eqation when press ( = ) button
document.getElementById("getRes").addEventListener("click",_ => calculate())


// Get the elements have ( op ) class
var opButtons = document.querySelectorAll(".op");

// loop through all opButtons
for (let i = 0; i < opButtons.length; i++) {

    // add event listenter to the element to check if it pressed or not
        opButtons[i].addEventListener("click",function () {
            
            // array of operations
            let a = ['+', '-', '*', '/'];

            // variable for input equation
            let inputValue = document.getElementById("equation").value;

            // check if there is number befor the input operator or not
            // AND check if there is operator befor the input operator or not
            if (inputValue != '' && !a.includes(inputValue[inputValue.length -1])){

                //display the input operator
                displayInput(this.value)
            }
        });
}
