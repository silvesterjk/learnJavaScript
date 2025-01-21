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