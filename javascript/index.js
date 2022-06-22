// node js is the platform for the runtime environment for js

console.log("hello");
// // types of variables: const(constant),let,var(global)

// // array  indexing from 0
var a1=["mon",32,12.3];
var a2= new Array ("tues",33,12.4);
var a3= new Array("wed",34,12.5);

console.log(a1.length);
console.log(a2[0]);
// to present
onsole.log(a1); //presend the whole structure 
                    //of the array too.

//methods to print
//1
for(let i=0;i<a1.length;i++)
{
    console.log(a1[i]);
}
//2
a2.forEach((element) =>{
    console.log(element);    
});
//3 will use this one more
a3.map((element) =>
{
    console.log(element);
});
//4  not used
console.log(a1);

//for printing date
console.log(new Date());
//milliseconds from 01-01-1970
console.log(new Date().getTime());