function evaluateExpression(expression) {
    // Remove any spaces from the expression
    expression = expression.replace(/\s+/g, '');

    // Initialize variables to keep track of the current number and the result
    let currentNumber = 0;
    let result = 0;
    let sign = 1; // 1 for positive, -1 for negative

    for (let i = 0; i < expression.length; i++) {
        let char = expression[i];

        if (isDigit(char)) {
            // If the current character is a digit, construct the current number
            currentNumber = currentNumber * 10 + parseInt(char);
        } else if (char === '+' || char === '-') {
            // When we encounter a sign, add the current number to the result with the correct sign
            result += sign * currentNumber;
            currentNumber = 0; // Reset the current number
            sign = char === '+' ? 1 : -1; // Update the sign
        }
    }

    // Add the last number to the result
    result += sign * currentNumber;

    return result;
}

function isDigit(char) {
    return char >= '0' && char <= '9';
}

// Example usage
console.log(evaluateExpression("85-87+120-10")); // Output: 108
