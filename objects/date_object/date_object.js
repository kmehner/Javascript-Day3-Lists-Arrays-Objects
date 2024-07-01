
/* DATE OBJECT: A js object that represents a date and time. 
It allows you to work with dates and times in your applications.
Data can be stored in the following formats:
- String: "December 17, 1995 03:24:00"
- Number: 1542412800000 (milliseconds since Jan 1, 1970)
- Array: [2021, 11, 17, 3, 24, 0, 0] */

// UNDERSTANDING THE DATE OBJECT
// Creating a new Date object with the current date and time
let currentDate = new Date();
console.log("Current Date:", currentDate);

// Creating a new Date object with a specific date and time
let specificDate = new Date("2024-02-10T08:00:00");
console.log("Specific Date:", specificDate);

// CREATING A NEW DATE OBJECT with the new Date() syntax
// the new Date() syntax creates a new instance of the date object without any arguments.
// When used without arguments, it returns the current date and time.

// Accessing date components
// In javscript, the Date object provides various methods for retrieving specific date and time components.
// These methods allow you to access individual parts of the Date Object for further manipulation or display.

let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1; // Adding 1 because months are zero-based
let day = currentDate.getDate();
let hour = currentDate.getHours();
let minute = currentDate.getMinutes();
let second = currentDate.getSeconds();
let millisecond = currentDate.getMilliseconds();

console.log("Year:", year);
console.log("Month:", month);
console.log("Day:", day);
console.log("Hour:", hour);
console.log("Minute:", minute);
console.log("Second:", second);
console.log("Millisecond:", millisecond);


// MANIPULATING DATE OBJECTS

currentDate.setDate(currentDate.getDate() + 7); // Add 7 days
console.log("Date after adding 7 days:", currentDate);

currentDate.setMonth(currentDate.getMonth() - 1); // Subtract 1 month
console.log("Date after subtracting 1 month:", currentDate);

// WORKING WITH TIMESTAMPS
// Timestamps are a way to represent dates as a single number.

// Converting dates to timestamps
let timestamp = currentDate.getTime();
console.log("Timestamp:", timestamp);

// Converting timestamps to dates
let newDate = new Date(timestamp);
console.log("Date from timestamp:", newDate);

// HANDLING TIME ZONES
// Javascript Date objects are based on the user's local time zone.
// getTimezoneOffset() method returns the TIME ZONE OFFSET in minutes. 
// Time offset refers to the difference in time between the local time and Coordinated Universal Time (UTC). 

// Getting the time zone offset
let timeZoneOffset = currentDate.getTimezoneOffset();
console.log("Time Zone Offset (in minutes):", timeZoneOffset);