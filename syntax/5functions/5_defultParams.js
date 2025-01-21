// When no parameter is passed, the default value is used. The default value is undefined.

function writeCode(language) {
    console.log(`write code in ${language}`);
}

writeCode('JavaScript'); // write code in JavaScript
writeCode(); // write code in undefined

console.log('-------------------');

function writeBECode(language= 'Python') { // Default value is Python
    console.log(`write code in ${language}`);
}

writeCode('JavaScript'); // write code in JavaScript
writeCode(); // write code in Python

console.log('-------------------');

function courseDetails(courseName='JSMastery', price=100) { // Default value is 100
    console.log(`Course name: ${courseName}, Price: ${price}`);
}

courseDetails('React', 200); // Course name: React, Price: 200