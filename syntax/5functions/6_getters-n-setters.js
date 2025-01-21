const course = { // This is an object
    name : 'JavaScript for Beginners',
    duration: '24 hours',
    details() { // This is a method
        return `${this.name} - ${this.duration}`;
    }
};

console.log(course.details()); // JavaScript for Beginners - 24 hours

// Even though the above is convinient and powerful, it is read only.

// Getters and  Setters

const course2 = { // This is an object
    name : 'JavaScript for Beginners',
    duration: '30 hours',
    get details() { // This is a getter
        return `${this.name} - ${this.duration}`;
    },
    set details(value) { // This is a setter
        const parts = value.toString().split(' - ');
        this.name = parts[0];
        this.duration = parts[1];
    }
}; 

console.log(course2.details); // JavaScript for Beginners - 24 hours

course2.details = 'React for Beginners - 35 hours';

console.log(course2.details); // React for Beginners - 30 hours
