// function expressions format ...
// i.e. simply storing functions() into variables...

const numberSum = function(num1,num2,num3){
    return num1+num2+num3;
}
console.log(numberSum(8,4,6));

let isEven = function(number){
    return number%2===0;
}
console.log(isEven(56));

var bdayWish = function(str){
    return `HAPPY BIRTHDAY TO YOU DEAR ${str}`;
}
console.log(bdayWish("Dianna".toUpperCase()));

const firstChar = function(char){
    return char[0];
}
console.log(firstChar("sfbujh"));

const findTarget = function(array,target){
    for(let i=0;i<array.length;i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
console.log(findTarget([65,37,27,26,99],27)); // 2