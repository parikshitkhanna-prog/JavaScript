let eng = new Array("Parikshit","Gayatri","Sanjana");
let doc = new Array("Sonia","Sangeeta","Arun");
let i;
for(i=0;i<eng.length;i++){
    switch(eng[i]){
        case "Parikshit" : console.log(`${eng[i]} is parikshit.`);
        break;
        case "Gayatri" : console.log(`${eng[i]} is lub`);
        break;
        case "Sanjana" : console.log(`${eng[i]} is sassy`);
        break;
    }
}
for(i=0;i<doc.length;i++){
    switch(doc[i]){
        case `Sonia` : console.log(`${doc[i]} is Studying 4th Year MBBS.`);
        break;
        case `Sangeeta` : console.log(`${doc[i]} is a hw doctor !`);
        break;
        case `Arun` : console.log(`${doc[i]} is working doctor.`);
        break;
    }
}