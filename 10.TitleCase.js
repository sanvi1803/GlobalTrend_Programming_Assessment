function toTitleCase(str) {
    return str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

// Example usage
const inputString = "convert this string to title case";
const titleCaseString = toTitleCase(inputString);
console.log(titleCaseString); // Output: "Convert This String To Title Case"
