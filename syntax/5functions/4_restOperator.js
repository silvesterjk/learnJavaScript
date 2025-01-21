let course  = {
    name: 'JS',
    price: 100,
}

let course2 = {
    ...course, // Spread operator // rest operator is used in function parameters 
    name: 'React',
}

console.log(course2); // { name: 'React', price: 100 }

function multiply(...args) {
    console.log(args); // [ 2, 3, 10 ] --> This array has 2,3,10 because the function was called with 2,3,10
    return args.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
    // The above code makes sure that the function would return 1 if the array is empty. If the array is not empty, it would multiply all the elements in the array
}

console.log(multiply(2, 3, 10, 10)); // 600


function mult (multiplier, ...numbers) { // ...numbers is the rest operator. It collects all the arguments passed to the function and puts them in an array
    // console.log(numbers); // [ 3, 10, 2, 3 ] --> This array has 3,10,2,3 because the function was called with 2,3,10,2,3
    return numbers.map(num => num * multiplier);  // This would multiply all the numbers in the array by the multiplier and return a new array
} 

console.log(mult(2, 3, 10, 2, 3)); // [ 6, 20, 4, 6 ] --> This arrsay has 6,20,4,6 because the function was called with 2,3,10,2,3
// Here the first value is multiplied by all the other values in the array