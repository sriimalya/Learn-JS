const accountID = 1234 //can't be re-assigned a value and can't be declared again  (block scope)
let accountEmail="malya@gmail.com" //can be re-assigned a value but can't be declared again (block scope)
var accountPassword="123456789" // it can be re-assigned a value and it can also be declared again  (Global scope)
accountCity="Jaipur"
let accountNumber
/*
Prefer not to use var because of issue in block scope and functional scope
*/

// accountID=2 //not allowed
console.log(accountID)

console.table([accountID,accountEmail,accountPassword,accountCity,accountNumber])

accountEmail="shreya@gmail.com"
accountPassword="@!123"
accountCity="Gkp"
accountNumber=9876543211

console.table([accountID,accountEmail,accountPassword,accountCity,accountNumber])