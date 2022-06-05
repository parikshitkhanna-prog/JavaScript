// hoisting property -> is when 
// functions() declared through function declaration syntax 
// can access that functions() before actually declaring the function itself i.e.

//i.e. calling function() before it's declaration itself !!!
// it works only in function declaration format...


// using function declaration -> success !!!
console.log(isEven(10));
function isEven(number){
    return number%2===0;
}
// again using function declaration -> success !!!
console.log(bdayParty("Parikshit".toUpperCase()));
function bdayParty(str){
    return `HAPPY BIRTHDAY TO YOU ${str}`;
}

// But this hoisting property does'nt work for the functions() that are 
// created using function expression syntax or via arrow functions i.e. js will throw error !!!

//using function expression -> throws error !!!
bdayWish("Parikshit");
const bdayWish = function(str){
    return `HAPPY BIRTHDAY TO YOU ${str}`;
}

//using arrow function -> throws error !!!
happybday("Parikshit");
const happybday = (str) => `HAPPY BIRTHDAY TO YOU ${str}`;