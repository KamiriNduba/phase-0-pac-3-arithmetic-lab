// Add two numbers and return the result
function add(a, b) {
    return a + b;
  }
  
  // Subtract b from a and return the result
  function subtract(a, b) {
    return a - b;
  }
  
  // Multiply two numbers and return the result
  function multiply(a, b) {
    return a * b;
  }
  
  // Divide a by b and return the result
  function divide(a, b) {
    return a / b;
  }
  
  // Increment a number by 1 and return the result
  function increment(n) {
    return ++n;
  }
  
  // Decrement a number by 1 and return the result
  function decrement(n) {
    return --n;
  }
  
  // Parses a string into an integer and returns the parsed integer
  function makeInt(n) {
    return parseInt(n, 10);
  }
  
  // Parses a string into a float and returns the parsed number
  function preserveDecimal(n) {
    return parseFloat(n);
  }
  
  module.exports = {
    add,
    subtract,
    multiply,
    divide,
    increment,
    decrement,
    makeInt,
    preserveDecimal,
  };
  