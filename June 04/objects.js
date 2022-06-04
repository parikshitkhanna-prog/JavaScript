// objects are created using key : value pairs in js
// and using curly braces !
// ------NOTE------
// sometimes these key:value pairs are 
// also called as properties of the object !
const Parikshit = {
    fname : "Raj Parikshit Khanna",
    age : 21,
    hobbies : ["Gym","Sleeping","eating","repeat"]
}
console.log(Parikshit);

// can perform various array operations on array property of the object !
console.log(Parikshit.hobbies.push("listening to music"));
console.log(Parikshit.hobbies.reverse());


// adding a new key : value pairs to object
Parikshit.gender = "Male";
// or 
// adding by using []
Parikshit["status"] = "single";
console.log(Parikshit);


// accessing data from the objects
console.log(Parikshit.fname);
// or
// by default objects data are stored in String format !
console.log(Parikshit["fname"]);