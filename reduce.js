let num=Number(prompt("enter upto a number"));
let arr=new Array();
let sum=0;
for(let i=1;i<=num;i++)
{
  arr.push(i);
}
console.log(arr);
let s= arr.reduce((sum,ele)=>sum+ele);

console.log(s);