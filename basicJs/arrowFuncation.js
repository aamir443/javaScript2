const heros = (name, age) => {
    console.log(`Name: ${name}, Age: ${age}`);
}
heros("Aamir", 22);


// Arrow functions do not have their own this context, they inherit it from the parent scope

// return somthing from arrow function
const add = (num1, num2) => {
    return num1 + num2;
}
console.log(add(5, 10)); 

// Implicit return in arrow functions
const multiply = (num1, num2) => (num1 * num2)
console.log(multiply(5, 10)); 

// when () is used in arrow function, it is not requeired to use return keyword
// when {} is used in arrow function, it is requried to use return keyword

// returning an object from arrow function
const createUser = (name, age) => ({
    name: name,
    age: age
});

