const calcBtns = document.querySelectorAll(".calc__btn");
const operatorBtns = document.querySelectorAll(".oper");
const numBtns = document.querySelectorAll(".num");
const otherBtns = document.querySelectorAll(".other");
const formulaOutput = document.querySelector(".calc__formula");
const totalOutput = document.querySelector(".calc__ans");
let formula = "";
let operator = "";
let total = 0;
let num1 = "";
let num2 = "";

/* for (let i = 0; i < calcBtns.length; i++) {
    calcBtns[i].addEventListener("click", (event) => calculate(event));
} */

// Function calculate
// should only handle the maths (should take two number and an operator and return the accurate results)
// when I click on equal I want to trigger the calculate function
//
// I want to get the first value user type as well as the operator, and the last value on display and feed that to my calculate function to get a result I can then display on the scren.

for (let i = 0; i < numBtns.length; i++) {
    numBtns[i].addEventListener("click", numbers);
}

for (let i = 0; i < operatorBtns.length; i++) {
    operatorBtns[i].addEventListener("click", operatorFunc);
}

function numbers(e) {
    if (num1 && operator) {
        num2 += e.target.value;
    } else {
        num1 += e.target.value;
    }
}

function others(e) {
    switch (e.target.value) {
        case "=":
            calculate();
            break;
        case "del":
            break;
        case ".":
            if (num1 && operator) {
                num2 += ".";
            } else {
                num1 += ".";
            }
            break;
        case "+/-":
            break;
        case "C":
            formula = "";
            operator = "";
            total = 0;
            num1 = "";
            num2 = "";
            break;
    }
}

function operatorFunc(e) {
    switch (e.target.value) {
        case "+":
            console.log("Addition");
            operator = "+";
            formula += e.target.value;
            break;
        case "-":
            console.log("Subtraction");
            operator = "-";
            formula += e.target.value;
            break;
        case "*":
            console.log("Multiply");
            operator = "*";
            formula += e.target.value;
            break;
        case "/":
            console.log("Divide");
            operator = "/";
            formula += e.target.value;
            break;
        case "x^y":
            console.log("Power");
            operator = "^";
            formula += "^";
            break;
    }
}

function calculate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return Number(num1) + Number(num2);
        case "-":
            return Number(num1) - Number(num2);
        case "*":
            return Number(num1) * Number(num2);
        case "/":
            return Number(num1) / Number(num2);
        case "^":
            return Number(num1) ** Number(num2);
    }
}

// Handle the button, operator, equal and decimal point logic separatly

/* function calculate(e) {
    // console.log(e.target.value);
    if (total === null) {
        total = parseInt(e.target.value);
    }
    if (e.target.value >= 0) {
        formula += e.target.value;
        switch (operator) {
            case "+":
                total += parseInt(e.target.value);
                operator = "";
                break;
            case "-":
                total -= parseInt(e.target.value);
                operator = "";
                break;
            case "*":
                total *= parseInt(e.target.value);
                operator = "";
                break;
            case "/":
                total /= parseInt(e.target.value);
                operator = "";
                break;
        }
    } else {
        switch (e.target.value) {
            case "+":
                console.log("Addition");
                operator = "+";
                formula += e.target.value;
                break;
            case "-":
                console.log("Subtraction");
                operator = "-";
                formula += e.target.value;
                break;
            case "*":
                console.log("Multiply");
                operator = "*";
                formula += e.target.value;
                break;
            case "/":
                console.log("Divide");
                operator = "/";
                formula += e.target.value;
                break;
            case "=":
                console.log("Equals");
                formula += e.target.value;
                break;
        }
    }
    console.log(total);
    console.log(formula);
    formulaOutput.innerText = formula;
    totalOutput.innerText = total;
} */
