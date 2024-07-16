class HashMap {
    constructor() {
        this.map = {};
    }
    put(key, value) {
        this.map[key] = value;
    }
    get(key) {
        return this.map[key];
    }
    remove(key) {
        if (this.map.hasOwnProperty(key)) {
            delete this.map[key];
        } else {
            console.log(`Key '${key}' does not exist in the HashMap.`);
        }
    }
}

// Example usage
const map = new HashMap();

// Add key-value pairs
map.put("apple", 5);
map.put("banana", 10);
map.put("cherry", 15);

// Get values
console.log(map.get("banana")); // Output: 10

// Remove a key-value pair
map.remove("banana");
console.log(map.get("banana")); // Output: undefined
