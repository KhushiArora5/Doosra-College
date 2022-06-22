const s="apple";
console.log(s);
console.log(s.substring(0,3)); //1      //substring takes the indsx and the last index but not included.
console.log(s.indexOf("l"));  //2
console.log(s.lastIndexOf("p"));  //3
console.log(s.slice(0,3));  //4
console.log(s.slice(-2));  //5      //slice can take -ve values but substring does not.
console.log(s.substr(1,3));  //6       //substr takes index and length from there.
console.log(s.replace(s,"car"));  //7
console.log(s.toLowerCase());  //8
console.log(s.toUpperCase());  //9
console.log(s.concat("mango")); //10
console.log(s.trim());

const x=12.355;
console.log(x.toFixed(1));  //11

// precedence: (),/,*,+,-