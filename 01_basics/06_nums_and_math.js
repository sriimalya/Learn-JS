const score = 400 // implicitely defined
// console.log(score);

const balance = new Number(100) // new object with explicitely defined the datatype
// console.log(balance);

// console.log(balance.toString().length); // methods defines in prototype
// console.log(balance.toFixed(1)); // fix decimal places

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4)); // 123.9

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // 10,00,000 according to Indian Standard


// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math); // object
// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.min(4, 3, 6, 8)); 
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // 0 to 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // to generate the value between min and max
