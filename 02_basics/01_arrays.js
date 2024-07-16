// array

const myArr = [0, 1, 2, 3, 4, 5] // created using an array literal
const myArr2 = new Array(1, 2, 3, 4) // created using an Array constructor

// If only one numeric argument is passed to the Array constructor, it creates an array with that length but with all elements undefined.

const myArr3 = new Array(4);
// console.log(myArr3); // Outputs: [<4 empty items>]
// console.log(myArr3.length); // Outputs: 4


// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) // 9, 0, 1, 2, 3, 4, 5
// myArr.shift() // 1, 2, 3, 4, 5

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() // 0,1,2,3,4,5
 
// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr); // [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3) // [ 1, 2 ]

console.log(myn1);
console.log("B ", myArr); // B  [ 0, 1, 2, 3, 4, 5 ] -> slice won't change original array vaues


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr); // C  [ 0, 4, 5 ]
console.log(myn2); // [ 1, 2, 3 ] -> splice will remove a portion from original array