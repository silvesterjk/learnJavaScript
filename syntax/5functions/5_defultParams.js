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