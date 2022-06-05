// arrow functions format ...
// i.e. simply representing functions() using arrows =>

const numberSum = (num1,num2,num3) => {
    return num1+num2+num3;
}
console.log(numberSum(8,4,6));

let isEven = (number) => {
    return number%2===0;
}
console.log(isEven(56));

// if a function() is returning only single line output then it can be furthur minimized as below...
var bdayWish = (str) => `HAPPY BIRTHDAY TO YOU DEAR ${str}`;
console.log(bdayWish("Dianna".toUpperCase()));

const firstChar = (char) => {
    return char[0];
}
console.log(firstChar("sfbujh"));

const findTarget = (array,target) => {
    for(let i=0;i<array.length;i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
console.log(findTarget([65,37,27,26,99],27)); // 2