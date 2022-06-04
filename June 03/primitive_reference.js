// primitive types behavior

let num1 = 10;
let num2 = num1;
console.log(num1,num2); //10,10
num1++;
// here both the variable values will be stored in stack only and hence if value of one variable is changes then it doesnt effect,
// value of other variable untill explicitly updated again... like if we do "num2=num1" again then the num2 value will get up to date !
console.log(num1,num2); //11,10

// reference types behavior

let arr1 = new Array("Parikshit","Khanna");
let arr2 = arr1;
console.log(arr1,arr2); 
// here array values will be stored in heap area and array pointer will be present in stack memory,
// and this array pointer from stack memory will be pointing to the address of the values of the array present in the heap area.
arr1.push("Sonia");
console.log(arr1,arr2);