let equation = "";
const calcBtns = document.querySelectorAll(".calcBtn");
let total = 0;
let operator = "";

for (let i = 0; i < calcBtns.length; i++) {
    calcBtns[i].addEventListener("click", calculate);
}

function calculate(e) {
    // console.log(e.target.value);
    if (e.target.value > 0) {
        equation += e.target.value;
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
                equation += e.target.value;
                break;
            case "-":
                console.log("Subtraction");
                operator = "-";
                equation += e.target.value;
                break;
            case "*":
                console.log("Multiply");
                operator = "*";
                equation += e.target.value;
                break;
            case "/":
                console.log("Divide");
                operator = "/";
                equation += e.target.value;
                break;
            case "=":
                console.log("Equals");
                break;
                equation += e.target.value;
        }
    }
    console.log(total);
    console.log(equation);
}
