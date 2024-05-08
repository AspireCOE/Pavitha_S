//Assign using arrow function
const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;

//Trying to export module from math.js to server.js
module.exports={
    add:add,
    subtract:subtract,
    multiply:multiply,
    divide:divide
};
