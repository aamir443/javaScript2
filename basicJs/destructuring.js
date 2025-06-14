const obj={
    name1: "Aamir",
    key1: "key33",
    age1: 22,
    isStudent: true,
    subjects: ['Math', 'Physics', 'Chemistry'],
    address: {
        city1: "varanasi",
        country: "India"
    }
}

const {age1: umar} = obj; // Destructuring to extract the age1 property
console.log(umar); 


// json is simply a string representation of an object 
// json is used to transfer data between server and client
// // json is used to store data in a file
