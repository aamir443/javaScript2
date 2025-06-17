// filter is a method that creates a new array with all elements that pass the test implemented by the provided function.


const students = [
  { name: "Aamir", age: 22, grade: "A" },
  { name: "Zara", age: 19, grade: "B" },
  { name: "Rohan", age: 24, grade: "A" },
  { name: "Neha", age: 22, grade: "C" },
  { name: "Raj", age: 23, grade: "B" }
];
// Filter students with grade 'A'
const gradAStudents = students.filter((st) => st.grade === "A");
console.log("Students with grade A:", gradAStudents);

// filter students older than 21 with grad b
const olderThan21with8= students.filter((st) => { return st.age >21 && st.grade==="B"});
console.log("Students older than 21 with grade B:", olderThan21with8);