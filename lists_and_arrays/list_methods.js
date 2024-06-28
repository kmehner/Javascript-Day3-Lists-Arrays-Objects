
// UNLEASHING THE POWER OF LISTS 
// Arrays are a powerful data structure that can store multiple values in a single variable.

let ingredients = ['flour', 'sugar', 'eggs'];
ingredients.push('butter');
console.log(ingredients); // Output: ['flour', 'sugar', 'eggs', 'butter']


// POP removes the last element from an array and returns it.
let fruits = ['apple', 'banana', 'orange'];
let lastFruit = fruits.pop();
console.log(lastFruit); // Output: 'orange'
console.log(fruits); // Output: ['apple', 'banana']

// MAP METHOD creates a new array by applying a function to each element of the original array.
let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6]

// FILTER METHOD creates a new array with elements that pass a test specified by a function.
let scores = [75, 80, 65, 90, 85];
let passing = scores.filter(score => score >= 70);
console.log(passing); // Output: [75, 80, 90, 85]

// REDUCE METHOD* reduces an array to a single value by applying a function to each element.
let expenses = [100, 50, 75, 120];
let total = expenses.reduce((acc, curr) => acc + curr, 0);
console.log(total); // Output: 345

