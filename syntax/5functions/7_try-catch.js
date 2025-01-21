const course2 = { // This is an object
    name : 'JavaScript for Beginners',
    duration: '30 hours',
    get details() { // This is a getter
        return `${this.name} - ${this.duration}`;
    },
    set details(value) { // This is a setter
        if (typeof value !== 'string') {
            throw new Error('Value should be a string');
        }
        const parts = value.split(' - ');
        this.name = parts[0];
        this.duration = parts[1];
    }
};

// console.log(course2.details); // JavaScript for Beginners - 30 hours

// course2.details = 22; // Error: Value should be a string

console.log('-------------------');

const course3 = { // This is an object
    name : 'JavaScript for Beginners',
    duration: '30 hours',
    get details() { // This is a getter
        return `${this.name} - ${this.duration}`;
    },
    set details(value) { // This is a setter
        if (typeof value !== 'string') {
            throw new Error(`${value} should be a string`);
        }
        const parts = value.split(' - ');
        this.name = parts[0];
        this.duration = parts[1];
    }
};

// console.log(course3.details); // JavaScript for Beginners - 30 hours

try{
    course3.details = 22;
} catch (error) {
    console.log(`Caught an error: ${error.message}`); 
}