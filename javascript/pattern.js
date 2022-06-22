// square pattern
console.log("Square Pattern");
let n=4;
let str="";

for(let i=0;i<n;i++)
{
    for(let j=0;j<n;j++)
    {
        str+="*";
    }
    str+="\n";
}

console.log(str);

console.log("Left Triangle Pattern");
let a=5;
let s="";

for(let i=0;i<=a;i++)
{
    for(let j=0;j<i;j++)
    {
        s+="*";
    }
    s+="\n";
}

console.log(s);