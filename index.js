let formula = "";
const calcBtns = document.querySelectorAll(".calc__btn");
const formulaOutput = document.querySelector(".calc__formula");
const totalOutput = document.querySelector(".calc__ans");
let operator = "";
let total = 0;

for (let i = 0; i < calcBtns.length; i++) {
    calcBtns[i].addEventListener("click", calculate);
}

function calculate(e) {
    // console.log(e.target.value);
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
    // console.log(total);
    // console.log(formula);
    formulaOutput.innerText = formula;
    totalOutput.innerText = total;
}
