function filterOutEvenNumbers(array) {
    return array.filter(num => num % 2 !== 0);
}

// Example usage
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterOutEvenNumbers(numbers)); // Output: [1, 3, 5, 7, 9]
