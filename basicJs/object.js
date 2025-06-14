let myKey = Symbol("key1"); // Creating a unique symbol

const obj = {
    name1: "Aamir",
    [myKey]: "key33",
    age1: 22,
    isStudent: true,
    subjects: ['Math', 'Physics', 'Chemistry'],
    address: {
        city1: "varanasi",
        country: "India"
    }
}

// console.log(obj.name);
// console.log(obj['age']); // Accessing property using bracket notation

// obj.name = "mohammad" // Modifying a property
// console.log(obj);


// // Object.freeze(obj); // Freezes the object, preventing any modifications

// obj.age = 23; // This will not change the age property because the object is frozen


// console.log(obj['key1']);



//part 2

// const studentDetails = new Object(); 

const studentDetails = {}
studentDetails.name = "Aamir";
studentDetails.age =23;
studentDetails.city = "varanasi";
console.log(studentDetails);

// const combiledobject = {...obj, ...studentDetails}; // Merging two objects
// console.log(combiledobject);

const assigningObject = Object.assign({}, obj, studentDetails); // Merging two objects using Object.assign


//arrayofObjects
const arrayOfObject=[{
    name: "Aamir",
    age: 23,
    city: "varanasi"
}, {
    name: "Mohammad",
    age: 24,
    city: "Delhi"
}, {
    name: "John",
    age: 25,
    city: "New York"
}]

console.log(arrayOfObject[1].city); // Accessing property of an object in an array
console.log(Object.keys(obj)); // Getting keys of an object
console.log(Object.values(obj)); // Getting values of an object
console.log(Object.entries(obj)); // Getting key-value pairs of an object

console.log(obj.hasOwnProperty('name1')); // Checking if a property exists in an object