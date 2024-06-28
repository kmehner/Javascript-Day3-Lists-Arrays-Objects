
// REGEX: Regular Expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. 
// These patterns are used with the exec() and test() methods of RegExp, and with the match(), matchAll(), replace(), search(), and split() methods of String.

// Creating regular expression
// regular expressions are defined using slashes (/) to enclose the pattern.

let pattern = /hello/;
console.log(pattern.test("hello, world")); // Outputs: true

// The test() method is used to check if a string contains a specified pattern.
// the match() method is used to match a string against a regular expression pattern.

let pattern2 = /\d+/;// Matches one or more digits
console.log(pattern2.test("abc123")); // Outputs: true
console.log("abc123".match(pattern2)); // Outputs: ["123"]

// Example: Analyzing Social Media Posts
let post = "Hey @JohnDoe, did you see the new #JavaScript tutorial? #coding";

// Extract mentions (usernames) from the post
let mentions = post.match(/@[A-Za-z0-9_]+/g);
console.log("Mentions:", mentions);

// Extract hashtags from the post
let hashtags = post.match(/#[A-Za-z0-9_]+/g);
console.log("Hashtags:", hashtags);