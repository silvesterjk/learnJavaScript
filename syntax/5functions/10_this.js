// This keyword

const course = function createCourse() {
    return {
        name: 'JS',
        price: 100,
        getName() {
            return this.name;
        }
    };
}

console.log(course().getName()); // JS

// Arrow functions do not have their own this keyword. They use the this keyword of the enclosing context.

const course2 = {
        name: 'Angular',
        start: () => {
            console.log(this.name); // this inherits the value from the global context. As name is not defined in the global context, it is undefined.
    }
}

course2.start(); // undefined 

// We could use bind keyword to bind the this keyword to the object

const course3 = {
    name: 'React',
    start() {
        console.log(this.name);
    }
}

const start = course3.start.bind(course3);
start(); // React --> this is bound to the object course3