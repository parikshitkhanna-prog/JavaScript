let Name = "Parikshit Khanna";
let age = "21";
let hobby = "Playing Cricket and doing Gym";
let degree = "Computer Science and Engineering";

// let myBioData = "My name is " + Name + " i'm " + age + " i like " + hobby + " i've completed my degree in " + degree; 

// using template string format
// i.e by using `backtick` and 
// ${} i.e dollar followed by placeholder...
// inside {} we specify variables that's it !
let myBioData = `My name is ${Name} i'm ${age} i like ${hobby} i've completed my degree in ${degree}`
console.log(myBioData);