function areAnagrams(str1, str2) {
    // Helper function to sort the characters of a string
    function sortString(str) {
        return str.split('').sort().join('');
    }

    if(str1.length!== str2.length){
        return false;
    }
    // Remove any whitespace and convert to lowercase for accurate comparison
    str1 = str1.replace(/\s+/g, '').toLowerCase();
    str2 = str2.replace(/\s+/g, '').toLowerCase();

    // Compare the sorted versions of the strings
    return sortString(str1) === sortString(str2);
}

// Example usage
console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("apple", "pale")); // Output: false
