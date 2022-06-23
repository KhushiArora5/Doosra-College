//types of data types
// 1. primitive: number,string,boolean,undefined,null,BigInt,Symbols
// 2. non-primitive: functions,arrays,except all primitive.
//data types
console.log(typeof 1);
console.log(typeof "1");
console.log(typeof (null));
console.log(typeof (true));
console.log(typeof NaN);    //NaN- not a number as he was excepting a no. but did nit succeed

// // declaration of objects 
const object = { 
    //key   //value
    name : "khushi",
    college : "sgtbimit"
};
//printing objects 
console.log(object);
console.log(object.college);



let a="khushi"+10;  //+ always prefers concating with string
console.log(a);

let i="khushi"-10;  //- always prefer int instead of string
//result will be NaN

// coercion- automatic conversion of data 
if(1=="1")  //equal to  
{
    console.log(true);
}
//checks the value and gives true even if datetypes are not same

if(1==="1")  //strically equal to  
{
    console.log(true);
}
//it checks the datatypes and value both but doesnot gives true if both datatypes are different 