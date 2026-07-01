

function getMessage(name, age) {

    return `hello,my name is ${name} and I am ${age} years old.`;
}


console.log(getMessage(process.argv[2], process.argv[3]));
module.exports = getMessage;
