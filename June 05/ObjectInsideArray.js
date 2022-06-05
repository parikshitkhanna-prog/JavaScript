// Inserting multiple objects inside arrays
// very much used in real world applications

let employees = [
    {empId : 100, empName:"Parikshit", empSal:30000},
    {empId : 200, empName:"Keshav", empSal:5000000},
    {empId : 300, empName:"Meghana", empSal:5000000},
    {empId : 400, empName:"Hepsiba", empSal:100000000}
];
for(let i=0;i<employees.length;i++){
    console.log(employees[i].empName);
}
for(let data of employees){
    console.log(data);
}