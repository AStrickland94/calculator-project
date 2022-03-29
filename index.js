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
            console.log(num1);
            console.log(num2);
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
            formula += ".";
            if (num1 && operator) {
                num2 += ".";
            } else {
                num1 += ".";
            }
            break;
        case "+/-":
            if (num1 && operator) {
                console.log(formula.substring(formula.length - num2.length));
                formula =
                    formula.slice(0, formula.length - num2.length) +
                    "-" +
                    formula.slice(formula.length - num2.length);
                num2 *= -1;
                console.log(num2);
            } else {
                console.log(formula.substring(formula.length - num1.length));
                num1 *= -1;
                console.log(num1);
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
        case "*":
            operator = "*";
            formula += e.target.value;
            break;
        case "/":
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
