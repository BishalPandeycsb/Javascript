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
 