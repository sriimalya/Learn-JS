// Immediately Invoked Function Expressions (IIFE)
// to avaoid polution from global scope
// ()() : (func def)(execute)


// named iife : chai named
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
//; semicolon is necessary to execute multiple iife

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('malya')