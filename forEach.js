let arr=[1,2,3,4,5];


let square=(val)=>{
    return val**2;
}

let newArr= [];

arr.forEach(ele => {
    //newArr.push((square(ele)));
    console.log(square(ele));
    
});

//console.log(newArr);