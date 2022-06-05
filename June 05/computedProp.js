const key1 = "name";
const key2 = "gender";
const val1 = "Parikshit";
const val2 = "Male";


const Person = {
    [key1] : val1, //[variable name] -> accessing through variables is 
    [key2] : val2  //is called as computed properties !
}
console.log(Person);


// or w/o help of computed properties
const person={} // 1st - create empty obj
person[key1]=val1;
person[key2]=val2;
console.log(person);