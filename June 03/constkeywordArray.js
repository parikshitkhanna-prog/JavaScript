let arr1 = new Array("parikshit","khanna");
arr1 = ["hello"];
arr1.push("Parikshit Khanna");
console.log(arr1);

const arr2 = new Array("parikshit","khanna");
arr2 = arr1; // error
arr1.push("Parikshit Khanna");
console.log(arr2);