// To transform an array into a string, the join() method can be utilized.
const numbers = [1, 2, 3, 4, 5];

// Can convert the array into a string,
// where you specify the separate as the argument which will be placed in between the elements.
const joinedNumbers = numbers.join(', ');
console.log(joinedNumbers);

// Likewise, the .split() method is available for strings,
// this is done to convert a string into an array.
// This will not alter the original string, rather it will return an array.
const courseName = 'JavaScript for Beginners';
const parts = courseName.split(' ');
console.log(parts);

// So an example which shows how this could be useful,
// consider the term, URL (Uniform Resource Locator) slug

// This refers to having a descriptive path in your URL.
// URL slugs are separated by a hyphen

// Utilize method chaining
const urlSlug = courseName
    .toLowerCase()
    .split(' ')
    .join('-');


// In programming, sorting is a common operation.
// JavaScript arrays come with a built-in sort method,
// that allows you to easily sort array elements.

// By default when you call sort on an array containing strings
// or numbers, it sorts the elements in ascending order.

let characters = ['c', 'd', 'b', 'a'];
characters.sort();
console.log(characters);

// Another useful method in the array data structure is .reverse()
// This can be used to reverse the order of the elements.
characters.reverse();
console.log(characters);

// When you have an array of objects, you need to provide a callback function to the sort method.
// This function defines the sorting logic based on the properties of the object in the array.
let employees = [
    { id: 1, name: 'Jen' },
    { id: 2, name: 'Steven' },
    { id: 3, name: 'Andrew' },
    { id: 4, name: 'Terry' },
];

// So since we are sorting reference types, we need to pass a callback function for the .sort() method.
// This callback function will accept two parameters which will represent two elements in this case.
// For the callback function, consider the two parameters, obj1 and obj2.

// If the result is a negative number, then obj1 would come before obj2 in the final sorted array.
// If the result is 0 then obj1 is equal to obj2 and no need to swap any elements.
// If the result is a positve number, then obj1 would come after obj2 in the final sorted array.

employees.sort((a, b) => {
    // Characters are represented internally as numbers in computers based on their ASCII values.
    // So capital letters are considered less than lowercase letters. 
    // Therefore, we want to make the strings all the same case. (case insensitive)

    const lowercaseA = a.name.toLowerCase();
    const lowercaseB = b.name.toLowerCase();

    if (lowercaseA < lowercaseB) return -1;
    if (lowercaseA > lowercaseB) return 1;
    return 0;
});

console.log(employees);