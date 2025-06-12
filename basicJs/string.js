// const name='  aamir';
// const city='varanasi';
// console.log("My name is "+name+" and I live in "+city+".");
// console.log(`My name is ${name} and I am from ${city}.`) // Template literals
// console.log(name.length); // Length of string
// console.log(name.toUpperCase()); // Convert to uppercase
// console.log(name.toLowerCase()); // Convert to lowercase
// console.log(name.indexOf('a')); // Index of first occurrence of 'a'
// console.log(name.lastIndexOf('a')); // Index of last occurrence of 'a'
// console.log(name.slice(1, 4)); // Slice from index 1 to 4
// console.log(name.replace('a', 'o')); // Replace first occurrence of 'a' with 'o'
// console.log(name.replaceAll('a', 'o')); // Replace all occurrences of 'a' with 'o'
// console.log(name.split('a')); // Split string by 'a' and it return string in array
// console.log(name.trim()); // Remove whitespace from both ends
// console.log(name.startsWith('a')); // Check if string starts with 'a'
// console.log(name.endsWith('r')); // Check if string ends with 'r'
// console.log(name.includes('aa')); // Check if string includes 'aa'
// console.log(name.charAt(2)); // Get character at index 2
// console.log(name.charCodeAt(2)); // Get ASCII value of character at index 2



const firstName = new String('Mohammad');
console.log(firstName); // String object .. key value pair
console.log(typeof firstName); // 'object'
console.log(firstName.length); // Length of string object
console.log(firstName.valueOf()); // Get primitive value of string object
console.log(firstName.toString()); // Convert string object to string
console.log(firstName[0]); // Access character at index 0
console.log(firstName.concat(' Aamir')); // Concatenate string
console.log(firstName.startsWith('M')); // Check if string starts with 'M'
console.log(firstName.endsWith('d')); // Check if string ends with 'd'
console.log(firstName.includes('ham')); // Check if string includes 'ham'
console.log(firstName.indexOf('h')); // Index of first occurrence of 'h'
console.log(firstName.lastIndexOf('h')); // Index of last occurrence of 'h'
console.log(firstName.slice(1, 4)); // Slice from index 1 to 4
console.log(firstName.replace('M', 'N')); // Replace first occurrence of 'M' with 'N'
console.log(firstName.replaceAll('a', 'o')); // Replace all occurrences of 'a' with 'o'
console.log(firstName.split('a')); // Split string by 'a' and it return string in array
console.log(firstName.trim()); // Remove whitespace from both ends
console.log(firstName.charAt(2)); // Get character at index 2
console.log(firstName.charCodeAt(2)); // Get ASCII value of character at index 2
console.log(firstName.toUpperCase()); // Convert to uppercase
console.log(firstName.toLowerCase()); // Convert to lowercase
console.log(firstName.search('ham')); // Search for 'ham' and return index
console.log(firstName.match(/a/g)); // Match all occurrences of 'a' and return array
console.log(firstName.localeCompare('Mohammad')); // Compare with another string
console.log(firstName.padStart(10, 'X')); // Pad start with 'X' to make length 10
console.log(firstName.padEnd(10, 'X')); // Pad end with 'X' to make length 10
console.log(firstName.repeat(3)); // Repeat string 3 times
console.log(firstName.split('')); // Split string into array of characters
console.log(firstName.toLocaleLowerCase('en-US')); // Convert to lowercase in specific locale
console.log(firstName.toLocaleUpperCase('en-US')); // Convert to uppercase in specific locale
console.log(firstName.normalize()); // Normalize string (Unicode normalization)
console.log(firstName.anchor('link')); // Create an anchor element with name 'link'
console.log(firstName.big()); // Create a big font size string
console.log(firstName.blink()); // Create a blinking string (not supported in modern browsers)
console.log(firstName.bold()); // Create a bold string
console.log(firstName.fixed()); // Create a fixed-width string
console.log(firstName.italics()); // Create an italic string
console.log(firstName.small()); // Create a small font size string
console.log(firstName.strike()); // Create a strikethrough string
console.log(firstName.sub()); // Create a subscript string
console.log(firstName.sup()); // Create a superscript string
console.log(firstName.link('https://example.com')); // Create a hyperlink
console.log(firstName.fontcolor('red')); // Change font color to red
console.log(firstName.fontsize(5)); // Change font size to 5