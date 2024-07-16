function capitalizeFirstLetterOfEachWord(str) {
    return str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

// Example usage
const inputString = "this is an example string";
console.log(capitalizeFirstLetterOfEachWord(inputString)); // Output: "This Is An Example String"
