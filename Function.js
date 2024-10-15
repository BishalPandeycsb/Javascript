let string="the quick brown fox jumps over the lazy dog"
console.log(string);
let c=0,v=0;

const count=(string)=>
{

    for(let i=0;i<string.length;i++)
    {
        console.log(string[i]);
        if(string[i]=='a'||string[i]=='e'||string[i]=='i'||string[i]=='o'||string[i]=='u')
        {
        
            c++;
        
        }
        else
        {
             v++;
        }
    }
    return {c,v};
}



console.log(count(string));