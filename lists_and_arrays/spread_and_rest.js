
// SPREAD AND REST OPERATORS 

// SPREAD OPERATOR: Allows an iterable such as an array or string to be expanded in 
// places where zero or more arguments or elements are expected.

let original = [1, 2, 3];
let newArray = [...original, 4, 5];
console.log(newArray); // Output: [1, 2, 3, 4, 5]

// What happens if we try to merge two objects without the spread operator?
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let merged = { obj1, obj2 };
console.log(merged); // Output: { obj1: { a: 1, b: 2 }, obj2: { c: 3, d: 4 } }

// Now, let's use the spread operator to merge the objects.
let mergedObjects = { ...obj1, ...obj2 };
console.log(mergedObjects); // Output: { a: 1, b: 2, c: 3, d: 4 }



// REST PARAMETER: Allows a function to accept an indefinite number of arguments as an array.
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15


// What happens if we adjust to the parameters of the sum function and remove the rest parameter?
function sum2(numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum2([1, 2, 3, 4, 5])); // Output: 15

// NOTE: There is a minor change that you might not have noticed. We placed the numbers into an array.
// This is because the function now expects a single array argument instead of multiple arguments.
console.log(sum2(1, 2, 3, 4, 5)); // This causes the function to fail 