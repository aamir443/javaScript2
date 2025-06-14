const arr = [2, 3, 5, 7, 8]
// console.log(arr[3]);
// arr.push(9);
// console.log(arr)
// arr.pop();
// console.log(arr);
// arr.unshift(1); // Adds an element to the beginning
// console.log(arr);
// arr.shift(); // Removes the first element
// console.log(arr);
// console.log(arr.indexOf(5)); // Returns the index of the first occurrence of 5
// console.log(arr.includes(5)); // Returns true if 5 is in the array
// console.log(arr.length); // Returns the length of the array
// console.log(arr.slice(0, 3)); // Returns a shallow copy of a portion of the array
// console.log(arr)
// console.log(arr.splice(0, 2)); // splice me range ko bhi include krta h or original array ko bhi manipluate kr deta h
// console.log(arr); // after splice it remove the first two elemnets from the array and print hte remaining elemnts


const courses = ['BCA', 'BBA', 'BSc', 'MCA', 'MBA'];
const subjects = ['Math', 'Physics', 'Chemistry', 'Biology'];

// courses.push(subjects)
// console.log(courses) //joins the subjects array to the courses array as a single element


// courses.push(...subjects) // spreads the subjects array into the courses array
// console.log(courses) // now subjects are added as individual elements to the courses array

// const combined = courses.concat(subjects); // combines both arrays into a new array
// console.log(combined); 

// const both = [...courses, ...subjects]; // spreads both arrays into a new array
// console.log(both); // same as concat but using spread operator




const arrayInsideArray = [1, 2, 3, [[8, 9, 6], 10, 11, 12]]
// console.log(arrayInsideArray[3][0][1]); // Accessing nested array elements
console.log(arrayInsideArray.flat(4)); // Flattens the array to a specified depth, here 4 levels deep
//flat method is used to flatten nested arrays into a single array

console.log(Array.isArray('Aamir')); // check if tha given value is an array or not if given value is not array then it return false
console.log(Array.from("Mohammad")); //from methd is used to convert string object into an array
console.log(Array.of(1,2,3,4,5)); //of method is used to create an array from the given arguments


const n1= 1;
const n2 = 2;
const n3 = 3;

console.log(Array.of(n1, n2, n3)); // of method is used to create an array from the given arguments and it can convert variables into array