// Write a function that returns a message using template literals.

function getMessage(name, age) {
    const formatted = name.charAt(0).toUpperCase() + name.slice(1);
    return `Hello ${formatted}, you are ${age} years old.`;
}

// Don't change the code below
let name = process.argv[2];
let age = process.argv[3];

if (name === undefined) {
    const parts = require("fs").readFileSync(0, "utf8").trim().split(",");
    name = parts[0].trim();
    age = (parts[1] || "").trim();
}

console.log(getMessage(name, age));
module.exports = getMessage;
