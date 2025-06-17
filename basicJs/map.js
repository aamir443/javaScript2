// The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.
//  callbackFn
// A function to execute for each element in the array. Its return value is added as a single element in the new array. The function is called with the following arguments:

// element
// The current element being processed in the array.

// index
// The index of the current element being processed in the array.

// array
// The array map() was called upon.


const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]
// The map() method creates a new array with the results of calling a provided function on every element in the calling array.