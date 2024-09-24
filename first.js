/*
abc=prompt("enter your age!")
alert("your age is:"+abc);
*/

/* whether can vote or not

age =prompt("enter your age!") 

if(age<10)
    alert("you are still a kid")
else if(age>65)
    alert("you are old enough !!")
else
    alert("you can vote !")

    */


//simple calculator

a=5;
b=3;

ch=prompt("choose + for addition, - for subraction, * for multipication and / for division")

switch(ch)
{
    case '+':
    console.log(a+b)
    break;
    case '-':
        console.log(a-b)
    break;
    case '*':
        console.log(a*b)
    break;
    case '/':
        console.log(a/b)
    break;
    default:
        console.log("wrong choice");
}
 