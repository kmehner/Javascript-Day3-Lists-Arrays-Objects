// STRING MANIPULATION AND METHODS

// Example: String Manipulation
let greeting = "Hello, World!";

// Length of a string
console.log(greeting.length); // Outputs: 13

// Accessing characters in a string
console.log(greeting.toUpperCase()); // Outputs: HELLO, WORLD!

// Concatenating strings: 
// This method extracts a section of a string and returns a new string.
console.log(greeting.substring(0, 5)); // Outputs: Hello

// Splitting a string
// This method splits a string into an array of substrings based on a specified delimiter.
console.log(greeting.split(",")); // Outputs: ["Hello", " World!"]

// Search for a substring in a string

let sentence = "The quick brown fox jumps over the lazy dog";

// The includes method returns true if a substring is found in a string.
console.log(sentence.includes("fox")); // Outputs: true

// The indexOf method returns the index of the first occurrence of a substring in a string.
// If the substring is not found, it returns -1.
console.log(sentence.indexOf("fox")); // Outputs: 16

// The lastIndexOf method returns the index of the last occurrence of a substring in a string.
// If the substring is not found, it returns -1.
console.log(sentence.lastIndexOf("the")); // Outputs: 31