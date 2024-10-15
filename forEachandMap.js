let arr=[1,2,3,4,5,6,7,8,9,10];

let square=(val)=>{
    return val**2;
}

arr.forEach((ele)=>
    {
        if(ele%2!=0)
        {
            console.log(square(ele));
        }
    })
    
   

let ev_array = arr.map((ele)=>{

    if(ele%2==0)
        {
            return square(ele);
        }
        
}).filter((val)=>{val!=undefined}
    

)

console.log(ev_array);

