//Activity 1-write a code for array function object declaration
//2-reverse number
//3-pallindrome number
//4-fibonacci series
//5-array-largest element in array,6-remove duplicate element,7-find missing number 
//8-string-reverse a string 
//9-count vowels in string
//10-check pallindrome in string
//11-numbers-check prime no, factorial number

//13-function find even odd
//14-function sum of array

//Activity 1-write a code for array function object declaration
//array:-
const arr=[1,2,3]
console.log(arr)

//function:-
function number(a)
{
    return a;
}
let result=number(10)
console.log(result)

//object
const Student={
    name:"Rutuja",
    email:"rutuja@gmail.com",
    rollno:45
};
console.log(Student);

//Activity 2-Reverse number
let a;
a=123;
let digit;
let rev=0;
while(a>0)
{
    digit=a%10;//get last digit
    rev=rev*10+digit;//add number
    a=Math.floor(a/10);//Remove the last digit from the number
}
console.log("Reverse number is:"+rev);

//Activity 3-Pallindrome number
//let num = Number(prompt("Enter Number"));
let num=121;
let temp = num;
let rev1=0;
let digit1;
while(num>0)
{
    digit1=num%10//getting last number
    rev1=rev1*10+digit1;//add number
    num=Math.floor(num/10);
}
console.log(rev1);
if(temp===rev1)
{
    console.log("Number is pallindrome");
}
else{
    console.log("Number is not Pallindrome");
}

//Activity 4-Fibonacci series
// let c=0,b=1,next;
// let n;
// n=a+b;
// a=b;


//Activity 5-largest element in an array
 const arr1=[1,8,2,3,4];
 let max,i;
 max=arr1[0];
 for(i=1;i<arr1.length;i++)
 {
    if(arr1[i]>max)
    {
        max=arr1[i];
    }
 }
 console.log("largest element is:"+max);

 //Activity 6-Remove duplicate element
 const arr2=[1,1,2,3,4];
 let k,j,tmp;
 for(k=0;k<arr2.length;k++)
 {
    for(j=k+1;j<arr2.length;j++)
    {
        if(arr2[k]==arr2[j])
        {
            arr2.splice(j,1);//remove element
            j--;
        }
    }
 }
 console.log("Duplicate element:"+arr2);

//Activity 7-Find missing Number

const arr3=[1,2,4,5,6];

let c;
for(c=0;c<arr3.length;c++)
{
    ar=arr3[c]+1;
}
console.log("Missing number is:"+ar);

//Activity 8-string-reverse a string
let str="hello";
let reversed=str.split("").reverse().join("");
console.log(reversed);

//Activity 9-count vowels in string
let count=0,l;
let str1="Hello WORLD";
vowels="aeiou";
let str2=str1.toLowerCase();
console.log(str2);
for(l=0;l<str2.length;l++)
{
if(vowels.includes(str2[l]))
{
    console.log(str2[l]);
    count++;
    
}
}

console.log("count of vowel is:"+count);

//Activity 10-factorial number

let num1=5
let n;
let num2=1;
for(n=1;n<=num1;n++)
{
    num2=num2*n;
}
console.log("factorial of a number is:"+num2);

//Activity 11-check pallindrome in string
let string="madam";
let reverse=string.split("").reverse().join("");
console.log(reverse);
if(string==reverse)
{
    console.log("String is pallindrome");
}
else
{
    console.log("String is not pallindrome");
}

//Activity 12-function for even odd number

function operation(n3)
{
    if(n3%2==0)
    {
        console.log("number is even");
    }
    else
    {
        console.log("number id odd");
    }
    return n3;
}
let n4=operation(4)



//Activity 13-function sum of array
function sum(n1)
{
    let e,total=0;
    for(e=0;e<n1.length;e++)
    {
    total+=n1[e];
    }
    return total;
}
let n2=sum([1,2,3,4]);
console.log("sum of array using function is:"+n2);

// Activity 14 - Prime number
let number1 = 24;
let isPrime = true;

if (number1 <= 1) {
    isPrime = false;
} else {
    for (let m = 2; m <= number1 / 2; m++) {
        if (number1 % m === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log("Number is prime");
} else {
    console.log("Number is not prime");
}
