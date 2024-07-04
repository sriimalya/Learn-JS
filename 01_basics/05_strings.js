const name = "malya"
const repoCount = 50

// console.log(name + repoCount + " Value"); // outdated

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // string interpolation

// Another method->provides methods, key value access of index
const gameName = new String('malya-js-com') 

console.log(gameName[0])
console.log(gameName.__proto__) // object

console.log(gameName.length);
console.log(gameName.toUpperCase()); // won't change the original string
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t')); // -1

const newString = gameName.substring(0, 4)
console.log(newString);
// console.log(gameName.substring(0,5)) // will change the string

const anotherString = gameName.slice(-4, -1)
console.log(anotherString);

const newStringOne = "   malya    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/malya%20srivastava"

console.log(url.replace('%20', '-'))

console.log(url.includes('shreya'))

console.log(gameName.split('-'));