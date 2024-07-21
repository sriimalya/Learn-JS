// When user.arrowFunction() is defined, its surrounding lexical scope is the global context (or module context in Node.js), not the user object. Therefore, this inside the arrow function refers to the global this, not user.


const user = {
    username: "malya",
    price: 999,

    welcomeMessage: function() {
        console.log(this.username) // malya
        console.log(this);
    },

    welcomeMessage2: () =>{
        console.log(this.username); //undefined
        //  because this does not refer to the 'user' object but to the 'global' context, which does not have a username property
    }

}

user.welcomeMessage();
user.welcomeMessage2();

// this->current context

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // {} // empty: node env // this refers to empty object
// if done in browser // gives window // Window->global object

// function chai(){
//  console.log(this);
// }

// chai() // this will have values// this is defined inside a func


// function chai(){
//     let username = "malya"
//     console.log(this.username); // undefined // doesn't works inside a function
// }
// chai()

// arrow functions
// const chai =  () => {
//     console.log(this); // same behaviour as in objects
// }

// chai() // {} // empty string

// const chai =  () => {
//     let username = "malya"
//     console.log(this.username); //undefined // same behaviour as in functions
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// implicit return
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => {username: "malya"} // undefined
// const addTwo = (num1, num2) => ({username: "malya"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()