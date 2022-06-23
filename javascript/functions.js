// ecma script
//function declaration
//traditional:
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

//parameterized function:
// function apple(parameter)
// {
//     console.log(parameter);
// }
// apple(32);

//automatically run the function:
(function apple()
{
    console.log("APPLE");
})();

(function apple(parameter)
{
    console.log(parameter);
})(32);