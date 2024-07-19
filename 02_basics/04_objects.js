// const tinderUser = new Object() // singleton object
// console.log(tinderUser) // {} // empty object

const tinderUser = {} // non-singleton object
// console.log(tinderUser) // {} // empty object


tinderUser.id = "123abc"
tinderUser.name = "Malya"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
// console.log(typeof tinderUser);

const regularUser = {
    email: "some@gmail.com",
    // nesting of object
    fullname: {
        userfullname: {
            firstname: "malya",
            lastname: "srivastava"
        }
    }
}

// ? is used for optional chaining
// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // results in nesting of objects

// const obj3 = Object.assign({}, obj1, obj2, obj4) // target={}, rest objs are source

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// array of objects 
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// users[1].email

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // array of id, name, isLoggedIn
// console.log(Object.values(tinderUser)); // array of values
// console.log(Object.entries(tinderUser)); // array in arrray [[key,value],[key,value]...]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true

// deconstruct array and objects
const course = {
    coursename: "js",
    price: "999",
    courseInstructor: "malya"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
// console.log(instructor);

// json : js object notation
// {
//     "name": "malya",
//     "coursename": "js",
//     "price": "free"
// }


// array of objects
// [
//     {},
//     {},
//     {}
// ]