let fName = "Parikshit";
let nothing = `Today's weather is soo romantic with ${fName}`;
if(nothing&&fName != null){
    console.log("All are truthy values i.e.\n");
    console.log(`${nothing}`);
}
else if(nothing==null){
    console.log("Nothing is falsy value !");
}
else if(fName==null){
    console.log("fName is falsy value !");
}
else{
    console.log("All are falsy values !");
}
