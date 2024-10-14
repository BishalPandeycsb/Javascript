let length=prompt("enter the length of   marks")
let marks= new Array(); /*declaring the array*/

for (let i=0;i<length;i++)
{
    num=prompt("enter the "+i+"number")
   marks.push(Number(num));
}
let sum=0,avg=0;
for(let el of marks)
{
    sum=sum+el;
    
}
console.log(sum)
avg=sum/length;
console.log(avg)
alert("the average of your array is "+avg)