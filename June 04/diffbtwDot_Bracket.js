// In Object creation...
// keys with spaces are to be mentioned with the help of string only
// using dot we can't access keys with spaces...
const person = {
    // mothers name : "Vaishali Khanna" -> space will throw error
    "mothers name" : "Vaishali Khanna",
    age : 45,
    hobbies : ["reading books","watching movies","prathakal bhajan"]
}
console.log(person);

// pushing variable values as keys into object...
let key = "gender";
person[key]="female";
console.log(person);