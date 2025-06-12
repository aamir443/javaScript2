const name='  aamir';
const city='varanasi';
console.log("My name is "+name+" and I live in "+city+".");
console.log(`My name is ${name} and I am from ${city}.`) // Template literals
console.log(name.length); // Length of string
console.log(name.toUpperCase()); // Convert to uppercase
console.log(name.toLowerCase()); // Convert to lowercase
console.log(name.indexOf('a')); // Index of first occurrence of 'a'
console.log(name.lastIndexOf('a')); // Index of last occurrence of 'a'
console.log(name.slice(1, 4)); // Slice from index 1 to 4
console.log(name.replace('a', 'o')); // Replace first occurrence of 'a' with 'o'
console.log(name.replaceAll('a', 'o')); // Replace all occurrences of 'a' with 'o'
console.log(name.split('a')); // Split string by 'a' and it return string in array
console.log(name.trim()); // Remove whitespace from both ends
console.log(name.startsWith('a')); // Check if string starts with 'a'
console.log(name.endsWith('r')); // Check if string ends with 'r'
console.log(name.includes('aa')); // Check if string includes 'aa'
console.log(name.charAt(2)); // Get character at index 2
console.log(name.charCodeAt(2)); // Get ASCII value of character at index 2