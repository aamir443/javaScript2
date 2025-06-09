const accountId = 1234567890;
let accountName = "John Doe";
var accountBalance = 1000.50;
state = "Delhi"; // Implicit global variable

console.table([accountId, accountName, accountBalance, state]);

accountId= 9876543210; // This will throw an error because accountId is a constant
// accountName = 123; // This will throw an error because accountName is a string
accountBalance = 2000.75; // This is allowed because accountBalance is a variable
console.log("Updated Account Balance:", accountBalance);
// console.log("Updated Account ID:", accountId); // This will throw an error because accountId is a constant
// console.log("Updated Account Name:", accountName); // This will throw an error because accountName is a string
console.log("State:", state); // This will work because state is an implicit global variable
// console.log("Account ID:", accountId); // This will throw an error because accountId is a constant
accountName ="aamir"; // This will work because accountName is a variable