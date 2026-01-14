// const s=2;
// console.log(s)

// s=3;
// console.log(s)
let a=100
var b=200
{
let a=10;
var b=20;
console.log("a:"+a,"b:"+b)
}
console.log("a:"+a,"b:"+b)//100 20 var can give updated value i.e 20 but for let it gives 200 doesn't give updated value.

//variable declaration

let c = 100 //number
let accountName = "User" //string
let d //undefined
let isActive = true //boolean
let salary = null //null
let x = 123456789012345678901234567890n; //big int 


console.log(typeof(c)) //typeof means it can give type of the variable
console.log(typeof(accountName))
console.log(typeof(d))
console.log(typeof(isActive))
console.log(typeof(salary))
console.log(typeof(x))
