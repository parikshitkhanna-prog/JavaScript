let arr1 = [1,2,3,4];
let arr2 = arr1;
arr1.push(5);
console.log(arr1,arr2);
console.log(arr1===arr2); // true -> bcoz here both arrays are pointing to same memory address !

// cloning array such that after cloning
// both arrays will have seperate pointers
// pointing to their own memory addresses in heap memory. 

// METHOD-1 {--slice()--}
// let array1 = [5,6,7,8];
// let array2 = array1.slice(0).concat([1,2]);
// array1.push(9,10);
// console.log(array1,array2);
// console.log(array1===array2); // false -> here both arrays point to different memory addresses !

// METHOD-2 {--[].concat()--}
// let array1 = [5,6,7,8];
// let array2 = [].concat(array1,[1,2]);
// array1.push(9,10);
// console.log(array1,array2);
// console.log(array1===array2);

// METHOD-3 {[...spread operator]}
let array1 = [5,6,7,8];
let array2 = [...array1,1,2];
array1.push(9,10);
console.log(array1,array2);
console.log(array1===array2);

