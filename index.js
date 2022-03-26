const equation = [];
const calcBtns = document.querySelectorAll(".calcBtn");

for (let i = 0; i < calcBtns.length; i++) {
    calcBtns[i].addEventListener("click", calculate);
}

function calculate(e) {
    console.log(e.target.value);
    if (e.target.value > 0) {
        equation.push(e.target.value);
    } else {
        switch (e.target.value) {
            case "+":
                console.log("Addition");
                equation.push(e.target.value);
                break;
            case "-":
                console.log("Subtraction");
                equation.push(e.target.value);
                break;
            case "*":
                console.log("Multiply");
                equation.push(e.target.value);
                break;
            case "/":
                console.log("Divide");
                equation.push(e.target.value);
                break;
            case "=":
                console.log("Equals");
                equation.push(e.target.value);
                break;
        }
    }
    console.log(equation);
}
