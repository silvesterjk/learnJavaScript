function multiply(a, b) {
  return a * b;
}

console.log(multiply(2, 3)); // 6 --> Each of the item is an argument. The arguments are passed to the function
// If one of the two arguments is missing, the function would return NaN because the function is expecting two arguments. It would instead pass undefined to the function. undefined * undefined = NaN

// Every function is JS has access to a special variable called arguments. It is an array-like object that contains all the arguments passed to the function. 
// It is not an array. It is an array-like object. It does not have all the methods that an array has. It is an object that has a length property and indexes

function mult() {
  console.log(arguments); // [Arguments] { '0': 2, '1': 3 }
  console.log(arguments[0]); // 2
  console.log(arguments[1]); // 3
  console.log(arguments.length); // 2
  return arguments[0] * arguments[1];
}

function multi(num1, num2) {
    let result = 1;
    for (const num of arguments) {
        result *= num;
    }
    return result;
  }

console.log(multi(2, 3, 10)); // 60