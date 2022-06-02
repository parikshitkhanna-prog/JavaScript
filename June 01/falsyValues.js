let str = "";
let Name;
let nothing = null;
let num = 0;
let bool = false;
if(nothing||str||Name||num||bool){
    console.log("Declared variables are not falsy values or they are not empty !");
}
else{
    console.log(`${str},${Name},${nothing},${num},${bool} are either empty string or undefined or null or 0 or false then else loop gets executed !`)
}