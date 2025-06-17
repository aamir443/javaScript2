// const myArray = [1, 2, 3, 4, 5];
// for(const item of myArray){
//     // console.log(item);
// }


const map1 = new Map();
map1.set('in', 'India');
map1.set('us', 'United States');
map1.set('uk', 'United Kingdom');

for (const [key, value] of map1) {
  console.log(`${key} => ${value}`);
}

// we can not use forof loop on objects
// map is not iterable


//                       for in loop
const myObject = {
  name: 'John',
  age: 30,
  city: 'New York'
};
for (const key in myObject){
  console.log(myObject[key]);
}

// for in loop is used to iterate over the properties of an object
// it will give the keys of the object
// console.log(myObject[key])

//        for each loop
const myArray = [1, 2, 3, 4, 5];
myArray.forEach((item, index) => {
  console.log(`Item at index ${index} is ${item}`);
});
// forEach is a method of the array object
// it is used to iterate over the elements of an array
// it takes a callback function as an argument
// the callback function takes two arguments, the item and the index
// forEach does not return anything, it just executes the callback function for each element of the array
// forEach is not a loop, it is a method of the array object



const arrObject = [{

  name: 'John',
  age: 30,
  city: 'New York'
}, {
  name: 'Jane',
  age: 25,
  city: 'Los Angeles'
}, {
  name: 'Mike',
  age: 35,
  city: 'Chicago' 
}]


arrObject.forEach((item)=>{
  console.log(item.name)
})