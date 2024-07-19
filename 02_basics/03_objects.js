// singleton // when we need only one instance of the class
// Object.create // using constructor

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Malya",
    "full name": "Malya Srivastava",
    // Symbols have to be declared in [], else they are converted to string type
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "malya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]) // by default converted to strings
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]) // to access Symbol datatypes


// console.log(typeof JsUser.age) // number
// JsUser.email = "malya@chatgpt.com"
// Object.freeze(JsUser) // to avoid any changes
// JsUser.email = "malya@microsoft.com" // won't reflect if freezed
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting) // reference of function return back, without being executed
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());