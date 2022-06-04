// case 1
const arr1 = ["value1","value2","value3"];
const a = arr1[0];
const b = arr1[1];
const c = arr1[2];

// case 2 - shortcut for case 1
let [m,n,o] = arr1;
console.log(m,n,o);

// case 3 - prints undefiend !
const arr = ["value1"];
let [u,v,w] = arr;
console.log(u,v,w);

// case 4 - skipping unwanted values
let[p, ,r]=arr1;
console.log(p,r);

// case 5 - remainig elements store in new array
const newArray = arr1.slice(1);
console.log(newArray);

// case 6 - shortcut for case 5
let[x,...nayaArray]=arr1;
console.log(newArray);