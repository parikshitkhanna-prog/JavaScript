let userInput = prompt("Enter today's date : ");
// prompt by default returns "String"
let today = new Date();
let date = today.getDate();
let month = today.getMonth()+1;
let year = today.getFullYear();
let fullDate = `${date}-${month}-${year}`+"";
if(userInput === fullDate){
    console.log(userInput);
    console.log("Hurrayy... Your'e on TRACK !\nKeep it UP !");
}else{
    console.log(userInput);
    console.log("Your progress is late !!! ");
}
