// spread operator in array was like
const arr1 = [1,2,3];
const arr2 = [4,5,6];
// spread operator is generally used to clone arrays !
const newArray = [...arr1,...arr2];
console.log(newArray);
// only strings are spreadable ! 
const nayaArray = [..."abcdefghijklmnopqrstuvwxyz"];
console.log(nayaArray);

// spread operator in objects...
const obj1 = {
    key1 : "value1",
    key2 : "value2"
};
const obj2 = {
    key3 : "value3",
    key4 : "value4"
};

// cloning objects...
const newObj = {...obj1,...obj2,key5:"value5",..."abcd",...["Parikshit","Sonia"]};
console.log(newObj);