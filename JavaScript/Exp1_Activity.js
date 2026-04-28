const accountemail = "hc@gmail.com"
// accountemail = "hb@gmail.com"
// console.log(accountemail);
// const a= 10



/*scope of variables
var take updated value beyond the scope*/
var b =20
let c =100

{
    let c =200;
    var b =300;
    document.write(c,b);
}
document.write(c,b);

/*varible declaration */ 
let studentid =10   //number
let studentname = "riya"        //string
let isstudent = true        //boolean
let student;            //undefined
let studentcourse=null      //null 
let BigInt =1234567890123456789012345n   //big int

/* typeof use to check datatype 
    null as datatype object

    to print on browser we use document.write 
    to print on console we use console.log
*/
document.write("<br>",studentid,"<br>",studentname,"<br>",isstudent,"<br>",student,"<br>",studentcourse,"<br>",BigInt);
document.write(typeof(BigInt))
document.write(typeof(studentcourse))

//Activity-1 : Display student information 
let name = "Rutuja"
let rollno = 45
let email = "rutuja@gmail.com";
document.write("<br><br>Displaying Student Information:-")
document.write("<br>Name: "+name+"<br>\nRoll Number is: "+rollno+"\n<br>Email is: "+email)
document.write("<br>")
document.write("<br>")


//Activity-2 : Odd Even Number
let a = 25
if(a%2==0)
{
    document.write("\nNumber is even")
}
else
{
    document.write("\nNumber is odd")
}

document.write("<br>")
document.write("<br>")

//Activity-3 : print number using loop
document.write("\nNumbers are:-")
let num=1
while(num<=10)
{
    document.write(num)
    num++;
}

document.write("<br>")
document.write("<br>")

//Activity-4 : student pass or fail
document.write("\nStudent result:")
let marks = 30

if(marks<40)
{
    document.write("Student is fail")
}
else
{
   document.write("Student is pass")
}
