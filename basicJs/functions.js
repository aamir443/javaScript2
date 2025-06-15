function addTwoNumbers(a, b){
    if(typeof a !== 'number' || typeof b !== 'number') {
        return; // Return undefined if inputs are not numbers
    }
    return a+b;
}
console.log(addTwoNumbers(5, 'a'));

// rest operator
function calculateCartPrice(val1, val2, ...price){  
    return price;
} 
// rest operator allows us to pass any number of arguments
// and it will be stored in an array called price
console.log(calculateCartPrice(100, 200, 300, 400, 500));

// 100 will be val1 and 200 will be val2 rest will be strored in price array


// object pass in a functions

const user = {
    name: 'aamir',
    age: 22
}

function handaleObject(printObject){
    console.log(printObject.name);
    console.log(printObject.age);
}
handaleObject(user);
// we can also pass object as a parameter in a function
// we can decalare the object in the function argument