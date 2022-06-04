// Two Ways
//1.for in loop
//2.Object.keys

const Parikshit = {
    fname : "Raj Parikshit Khanna",
    age : 21,
    hobbies : ["Gym","Sleeping","eating","repeat"]
}

// 1. for in loop
for(data in Parikshit){
    console.log(Parikshit[data]); // here data will represent key name !
}

// to print data in key:value format...
for(data in Parikshit){
    console.log(`${data} : ${Parikshit[data]}`);
}
// or 
for(data in Parikshit){
    console.log(data," : ",Parikshit[data]);
}


// 2. Object.keys

// console.log(Object.keys(Parikshit)); // returns keys !
// let check = Array.isArray(Object.keys(Parikshit));
// console.log(check); // true !

for(data of Object.keys(Parikshit)){
    console.log(Parikshit[data]);
}