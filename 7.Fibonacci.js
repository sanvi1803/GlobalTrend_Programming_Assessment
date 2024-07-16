function generateFibonacciSequence(nTerms) {
    if (nTerms <= 0) {
        console.log('Enter a valid number.');
        return;
    }
    // Function to calculate Fibonacci number for a given term
    function fibonacci(num) {
        if (num < 2) {
            return num;
        } else {
            return fibonacci(num - 1) + fibonacci(num - 2);
        }
    }
    // Array to store Fibonacci sequence
    const fibonacciSequence = [];
    // Generate Fibonacci sequence and store in array
    for (let i = 0; i < nTerms; i++) {
        fibonacciSequence.push(fibonacci(i));
    }
    // Print the Fibonacci sequence
    console.log(fibonacciSequence.join(', '));
}

generateFibonacciSequence(10);

