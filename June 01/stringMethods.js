let str = "         Good Morning !";
console.log(str);
// to remove spaces at start & end of the string
let trimStr = str.trim(); // does not directly modify the variable but stores it in a new variable...
console.log(trimStr);
// uppercase()
console.log(trimStr.toUpperCase());
//lowercase()
console.log(trimStr.toLowerCase());
//slice-basically acts like substring...
console.log(trimStr.slice(5,trimStr.length-1));