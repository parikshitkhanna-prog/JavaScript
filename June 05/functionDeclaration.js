// function declarations format ...

function numberSum(num1,num2,num3){
    return num1+num2+num3;
}
console.log(numberSum(8,4,6));

function isEven(number){
    return number%2===0;
}
console.log(isEven(56));

function bdayWish(str){
    return `HAPPY BIRTHDAY TO YOU DEAR ${str}`;
}
console.log(bdayWish("Dianna".toUpperCase()));

function firstChar(char){
    return char[0];
}
console.log(firstChar("sfbujh"));

function findTarget(array,target){
    for(let i=0;i<array.length;i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
console.log(findTarget([65,37,27,26,99],27)); // 2