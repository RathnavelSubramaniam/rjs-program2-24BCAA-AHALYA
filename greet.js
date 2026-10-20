// Write a function that returns a message using template literals.

function getMessage(name, age) {
    const formatted = name.charAt(0).toUpperCase() + name.slice(1);
    return `Hello ${formatted}, you are ${age} years old.`;
}

// Don't change the code below
console.log(getMessage(process.argv[2], process.argv[3]));
module.exports = getMessage;
