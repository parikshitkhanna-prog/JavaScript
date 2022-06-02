// Primitive Data Types
// string - "anycharacters"
// number - 2, 4, 6.7,...
// boolean - True/False
// undefined - not ass any value to variable
// null - empty
// BigInt
// Symbol

//typeof operator returns datatype of the variable...

let Name = "pk"; // string
let age = 527; // number
console.log(typeof(Name));

//convert number to string datatype...
// let rollno = 786;
// console.log(typeof rollno); // number
// strRno = rollno + ""; // just adding "" to the number !
// console.log(typeof strRno); // string 

//convert string to number datatype...
// let myStr = "69";
// console.log(typeof myStr); // string
// myStr = +"69"; // just adding + before the string !
// console.log(typeof myStr); // number

//convert number to string datatype...
let num = 49; // number
num = String(num);
console.log(typeof num); // string

//convert string to number datatype...
let str = "55"; // string
str = Number(str);
console.log(typeof str); // number


//undefined datatype
let anyVar;
console.log(typeof anyVar); // undefined
anyVar = 767;
console.log(typeof anyVar, anyVar); // number 767


//null datatype
let empty = null;
console.log(typeof empty, empty); // object null
empty = 6576+"";
console.log(typeof empty, empty); // string 6576


//BigInt datatype
let num1 = BigInt(124);
let num2 = 148n;
console.log(typeof num1); // BigInt
console.log(typeof num2); // BigInt
console.log(num1+num2); // 272n

// booleans & comparision operator

let a=2;
let b=2;
console.log(a==b); //true-checks value

let first="12";
let second=12;
console.log(first===second);//false-checks datatype