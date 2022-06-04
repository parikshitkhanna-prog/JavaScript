// for in loop will return the index value !
const family = new Array("Pk","sonia","pappa","mummy");
for(let members in family){
    console.log(family[members]);
}
const newFamily = [];
for(members in family){
    newFamily.push(family[members].toUpperCase());
    // console.log(family[members]);
}
console.log(newFamily);