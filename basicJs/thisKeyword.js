// this keyword refer to the current object in JavaScript.
// this eyword refer to the crurent context in JavaScript.


const studentDetails = {
    name: "John",   
    age: 20,
    getDetails: function() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

studentDetails.getDetails(); // Output: Name: John, Age: 20
// Using the this keyword to access properties of the object

// this keyword in functions 
function showDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}
showDetails(); // Output: Name: undefined, Age: undefined
// In this case, this refers to the global object (window in browsers) or undefined in node enviroment