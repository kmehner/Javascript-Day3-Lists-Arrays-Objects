
// Objects: Javascript objects are containers for named values called properties or methods. 

// Object Definition
let superhero = {
  name: "Iron Man",
  powers: ["Flight", "Super Strength", "Genius-level Intellect"],
  suitColor: "Red and Gold",
};

// Accessing Object Properties
console.log(superhero.name); // Output: "Iron Man"
console.log(superhero["powers"]); // Output: ["Flight", "Super Strength", "Genius-level Intellect"]

// Object methods: Objects can also have methods, which are functions stored as object properties. 
// Using the THIS Keyword - The this keyword refers to the object it belongs to.

let superhero2 = {
  name: "Iron Man",
  powers: ["Flight", "Super Strength", "Genius-level Intellect"],
  suitColor: "Red and Gold",
  introduce: function() {
      console.log("I am " + this.name + ", and I'm ready to save the world!");
  }
};

superhero2.introduce(); // Output: "I am Iron Man, and I'm ready to save the world!"

