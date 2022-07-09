// // ecma script
// //function declaration
// //traditional:
// function apple()
// {
//     console.log("APPLE");
// }
// apple();

// //arrow:
// const Apple = () =>
// {
//     console.log("APPLE");
// }
// Apple();

// //parameterized function:
// function apple(parameter)
// {
//     console.log(parameter);
// }
// apple(32);

// //automatically run the function:
// (function apple()
// {
//     console.log("APPLE");
// })();

// (function apple(parameter)
// {
//     console.log(parameter);
// })(32);

// // functions are vips in js bcoz 1.can be assigned to a variable
// // 2. can be returned from te function
// // 3. can be passes to any function  - Callback

// //1
// const variableName = function (parameter) 
// {
//     console.log(parameter);
// } 
// variableName();
// variableName("apple");

// //2
// function apple() {
//     return function calc() {
//       return 10;
//     };
//   }
//   var test = apple(); // it is varaible store the function and function is converting variable to function;
//   console.log(test());

// //3. callback are the functions which can be passed to another function.

// // naming conventions:
// //1. camel casing- first letter of second word is cap.
// function returnName()
// {

// }
// //2. underscore-
// function return_name()
// {

// }


// //variables:
// // let, const, var
// const name = "apple"; //constant

// var name = "apple"; //for global scope, can be reassign and redeclared.
// var name;
// console.log(name);

// let name = "apple"; //can be reassigned, usually within the function
// name =  "mango";
// console.log(name);

// // why interpreted
// console.log(x);
// var x=10;

// //why compiled
// const ftn = function ()
// {
//     console.log("apple");
// };
// ftn();

// //hoisting
// ftn();
// function ftn()
// {
//     console.log("apple");
// };

// //currying
// function ftn(a){
//     return (b) =>{
//         return (c) =>{
//             return a + b + c;
//         };
//     };
// }
// console.log(ftn(10)(20)(30));

// //function:
// function ftn2(a,b,c){
//     return a+b+c;
// }
// console.log(ftn2(10,20,30));


// var num1=20, num2= 30;
// function a(ab,bc)
// {
//     function b()
//     {
//         function c()
//         {
//             return num1+num2;
//         }
//         return c();
//     }
//     return b();
// }

// console.log(a());


// setTimeout(function () {
//     console.log("hello from the set time out");
// }, 3000); //async  //anonymous function  //callback

 console.log("hello common");

// //to run js we have : call stack, event loop, queue.
//synchronous by call stack
console.log("hello common 1");
console.log("hello common 2");
console.log("hello common 3");
console.log("hello common 4");
console.log("hello common 5");

// event loop checks that whether the call stack is empty or not.  

//asynchronous: to declare use keyword async() or 
// async stored in queue fifo