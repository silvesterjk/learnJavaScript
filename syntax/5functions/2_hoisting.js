console.log(sum(1, 2)); // 3 --> This would still work because of hoisting. The function is hoisted to the top of the file.
// // This does not apply to function expressions. It only applies to function declarations.

function sum(a, b) {
  return a + b;
}

// console.log(add(1, 2)); // 3

// If 

console.log(add(1, 2)); // 3 --> This would not work because function declarations are hoisted to the top of the file. This does not apply to function expressions. It only applies to function declarations.

let add = function (a, b) {
  return a + b;
}