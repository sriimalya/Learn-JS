// var c = 300 // var has global scope
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c=30
    console.log(c)
    // console.log("INNER: ", a);
    
}

console.log(c) // c=>var // 30



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "malya"

    function two(){
        const website = "portfolio"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "malya"
    if (username === "malya") {
        const website = " portfolio"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // will not throw error

function addone(num){
    return num + 1
}


//addTwo(5) // will throw error(since, expression) // ReferenceError

//expression
const addTwo = function(num){
    return num + 2
}