// ()() this is iife function
// iife stands for immediately invoked function expression

// This is an IIFE (Immediately Invoked Function Expression) that executes a function immediately after it is defined.
// iife function is a function that runs as soon as it is defined
// second reason to use iife is to avoid polluting the global scope

( function iife(name){
    console.log(`Name: ${name}`);
})('Aamir'); 
// named iife function

// rule for declare to iife function if we not use ; at the end of the function then it will throw a error

( (name, age) => {
    console.log(`Name: ${name}, Age: ${age}`);
})('Aamir', 22);

