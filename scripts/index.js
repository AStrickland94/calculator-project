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

for (let i = 0; i < numBtns.length; i++) {
    numBtns[i].addEventListener("click", numbers);
}

for (let i = 0; i < operatorBtns.length; i++) {
    operatorBtns[i].addEventListener("click", operatorFunc);
}

for (let i = 0; i < otherBtns.length; i++) {
    otherBtns[i].addEventListener("click", others);
}

function numbers(e) {
    formula += e.target.value;
    formulaOutput.innerText = formula;
    if (num1 && operator) {
        num2 += e.target.value;
    } else {
        num1 += e.target.value;
    }
}

function others(e) {
    switch (e.target.value) {
        case "=":
            calculate(num1, num2, operator);
            break;
        case "del":
            if (
                parseInt(formula.substring(formula.length - 1)) != NaN ||
                formula.substring(formula.length - 1) === "."
            ) {
                if (num1 && operator) {
                    num2 = num2.slice(0, -1);
                    formula = formula.slice(0, -1);
                } else {
                    num1 = num1.slice(0, -1);
                    formula = formula.slice(0, -1);
                }
            } else {
                formula = formula.slice(0, -1);
                operator = "";
            }
            formulaOutput.innerText = formula;
            break;
        case ".":
            if (formula.slice(formula.length - 1) === ".") {
                break;
            }
            formula += ".";
            if (num1 && operator) {
                num2 += ".";
            } else {
                num1 += ".";
            }
            formulaOutput.innerText = formula;
            break;
        case "+/-":
            if (num1 && operator) {
                formula = formula.replace(num2, (num2 *= -1));
                formulaOutput.innerText = formula;
            } else {
                formula = formula.replace(num1, (num1 *= -1));
                formulaOutput.innerText = formula;
            }
            break;
        case "C":
            formula = "";
            operator = "";
            total = 0;
            num1 = "";
            num2 = "";
            formulaOutput.innerText = "0";
            totalOutput.innerText = "0";
            break;
    }
}

function operatorFunc(e) {
    if (num2) {
        calculate(num1, num2, operator);
    }
    if (operator) {
        formula = formula.slice(0, -1);
    }
    switch (e.target.value) {
        case "+":
            operator = "+";
            formula += e.target.value;
            break;
        case "-":
            operator = "-";
            formula += e.target.value;
            break;
        case "x":
            operator = "*";
            formula += e.target.value;
            break;
        case "÷":
            operator = "/";
            formula += e.target.value;
            break;
        case "x^y":
            operator = "^";
            formula += "^";
            break;
    }
    formulaOutput.innerText = formula;
}

function calculate(a, b, op) {
    switch (op) {
        case "+":
            total = Number(a) + Number(b);
            break;
        case "-":
            total = Number(a) - Number(b);
            break;
        case "*":
            total = Number(a) * Number(b);
            break;
        case "/":
            total = Number(a) / Number(b);
            break;
        case "^":
            total = Number(a) ** Number(b);
            break;
    }
    totalOutput.innerText = total;
    num1 = total;
    num2 = "";
    operator = "";
}
