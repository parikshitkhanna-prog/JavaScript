// destructuring means -> assigning values seperately to new variables
// from the object key:value pairs
const obj1 = {
    key1:"val1",
    key2:"val2",
    key3:"val3",
    key4:"val4",
    key5:"val5"
};
// case-1
// let var1 = obj1.key1;
// let var2 = obj1.key2;

//case-2 >> shortcut for case-1
// let {key1:var1,key2:var2}=obj1;
// console.log(var1);

//case-3 >> adding remaining key:value pairs to new object
let {key1:var1,key2:var2,...newObject}=obj1;
console.log(newObject);
