const family = new Array("Pk","sonia","pappa","mummy");
for(let members of family){
    console.log(members);
}
const newFamily = [];
for(members of family){
    newFamily.push(members.toUpperCase());
}
console.log(newFamily);