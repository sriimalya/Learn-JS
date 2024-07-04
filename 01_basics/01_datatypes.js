"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 + 3) // code readability should be high

console.log("Hello")


let name = "malya"
let age = 18
let isLoggedIn = false
let state;

const id = Symbol('123')
const anotherId = Symbol('123')
 
console.log(id === anotherId); // false

// primitive datatypes
// number => 2 to power 53
// bigint => for large numbers
// string => ""
// boolean => true/false
// null => standalone value (object type)
// undefined => kindda place holder for a value which is not defined yet (type = undefined)
// symbol => unique

// Reference(non primitive)
// array, object, function

console.log(typeof undefined); // undefined
console.log(typeof null); // object

// RETURN TYPES

// Primitive Datatypes(Stack->copy of variable)
    //    Number => number
    //    String  => string
    //    Boolean  => boolean
    //    null  => object
    //    undefined  =>  undefined
    //    Symbol  =>  symbol
    //    BigInt  =>  bigint

// Non-primitive Datatypes(Heap memory-> reference to the same variable)
    //    Arrays  =>  object
    //    Function  =>  function
    //    Object  =>  object