// SORTING, ITERATING, DESTRUCTRING

// Sorting an array

let numbers = [3, 1, 5, 2, 4];
numbers.sort();
console.log(numbers); // Output: [1, 2, 3, 4, 5]


// Iterating over an array
// The forEach method iterates over each element in an array and executes a callback function.

let colors = ['red', 'green', 'blue'];
colors.forEach(color => {
    console.log(color);
});
// Output:
// red
// green
// blue

// Destructuring an array
// Destructuring allows you to extract values from arrays or objects and assign them to variables.
let [first, second, third] = ['one', 'two', 'three'];
console.log(first); // Output: 'one'
console.log(second); // Output: 'two'
console.log(third); // Output: 'three'