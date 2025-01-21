const name = "Silvester"; // This variable is declared in the global scope

console.log(name); // Silvester

{
    const name = "Silvester"; // this variable is declared in the global scope
    console.log(name); // Silvester
} // This is a block scope. The variable name is not accessible outside the block.

// Declaring variables locally is a good practice. It helps to avoid naming conflicts. It also helps to keep the code clean and organized.