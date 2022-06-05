let employees = [
    {empId : 100, empName:"Parikshit", empSal:30000},
    {empId : 200, empName:"Keshav", empSal:5000000},
    {empId : 300, empName:"Meghana", empSal:5000000},
    {empId : 400, empName:"Hepsiba", empSal:100000000}
];

let [emp1,emp2,emp3,emp4]=employees;
console.log(emp1);
console.log(emp2.empName,emp3.empName);

// seperately destructuring objects ...
let [{empId:user1,empName:username1}, , , {empId:user3,empName:username3,empSal:salary}]=employees;
console.log(username1,username3);