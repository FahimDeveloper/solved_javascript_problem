const calculate = (number1, number2, operator) => {
    switch (operator) {
        case "+":
            return number1 + number2;
        case "-":
            return number1 - number2;
        case "/":
            return number1 / number2;
        case "*":
            return number1 * number2;
        default:
            return "Invalid operator";
    }
}
console.log(`Out put is ${calculate(55, 25, "+")}`)