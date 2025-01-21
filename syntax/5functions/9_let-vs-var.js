// var keyword is function scoped. It is used to declare variables that are limited to the function where it is used.
// let keyword is block scoped. It is used to declare variables that are limited to the block, statement, or expression on which it is used.
// const keyword is block scoped. It is used to declare variables that are limited to the block, statement, or expression on which it is used.

function display() {
    for (var i=0; i<5; i++) {
        console.log(i);
    }
    console.log(i); // the usage of var make it accessible outside the block scope and outside the for loop
}

display(); // 0 1 2 3 4 5

// The following usage of let/const would throw an error because let/const are block scoped

function display2() {
    for (let i=0; i<5; i++) {
        console.log(i);
    }
    console.log(i); // the usage of var make it accessible outside the block scope and outside the for loop
}
try {
    display2(); // 0 1 2 3 4 5
} catch (error) {
    console.log(error.message);
}

// var is n