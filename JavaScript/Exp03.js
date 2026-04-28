//activity 1-difference between arrow function and simple function.use of this keyword in arrow function and simple function if not applicable then why?
//write a code of arrow function with two eg
//code for switch case in js
//how to use truthy and falsy values in javascript
//how to use ternery operators in js
//while,do-while for-each,for-of ,for-in etc loops in array js(see other also)
//diff between for of and for in
//how to use map and filter function in js
//how to use reduce method in js

//Activity 3-code for switch case in js

let char=prompt("Enter a character")
ch=char.toLowerCase();

switch(ch)
{
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log(`Entered character ${ch} ia an vowel`);
        break;
    default:
        console.log("Entered character is a constant");
}

//Ternery operators in java script
let age=prompt("Enter age");
let result1=(age>=18) ? "Adult":"Not Adult"
console.log("Ternery result:"+result1)

//while,do-while for-each,for-of ,for-in etc loops in array js(see other also)
// let num=prompt("Enter number")
// let i=1,num1;
// while(i<=10)
// {
//     num1=num*i;
//     i++;
//     console.log(num1);
// }
// console.log("while loop")
let a=[1,2,3,4]
let s=0;
while(s<a.length)
{
    if(a[s]%2==0)
    {
        console.log("Even numbers are:"+a[s]);
    }
    s++;
}
console.log("Even numbers are:"+a[s]);
//do while
let j=1;
do{
    console.log(j);
    j++;
}while(j<=10)
    console.log("Printing numbers using do-while loop")

//for loop
let arr=new Array("rutuja","amruta","samruddhi")
//let k
// for(k=0;k<arr.length;k++)
// {
// console.log(arr[k])
// }
// console.log(arr[1])

arr.forEach(function(value,index) //runs function for each element and it cannot use break or continue.index-value pair
{
    console.log("forEach loop result is:"+index,value)
})
//for-of-directly gives array elements(values) without indexing
for (let value of arr) {
    console.log("for-of loop result is:"+value);
}

//for-in->it can print indexing.Mostly used for objects, but works for arrays
for(let index in arr)
{
    console.log("for-in loop result is:"+index);
}

//arrow function-arrow function used with map,filter,foreach,
// setTimeout / setInterval,callback function(unction is passed inside another function.)
// Do NOT use arrow function:
// Inside object methods
// When you need your own this
//Correct Statement:
//Arrow functions do not have their own this.
//They use this from their parent (outer) scope.

const profile={
    name:"rutuja",
    age:21,
    greet(){
        setTimeout(()=>{
             console.log(this.name);
        },100);
    }
}
profile.greet();

//map-map means changing each element in an array and return a new array without changing original array
let arr3=[1,2,3,4]
let double=arr3.map(num=>num*2);
console.log("Result of map is:"+double);

//filter-element changes based on condition

let a1=[1,2,3,4,5];
let evennum=a1.filter(num=>num%2===0)
console.log("using filter finding even numbers from array:"+evennum);


