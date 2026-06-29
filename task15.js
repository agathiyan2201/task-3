

let employees = {
    Rahul: "Present",
    Arun: "Absent",
    Kamal: "Present",
    Priya: "Present",
    Divya: "Absent"
};

let presentEmployees = [];
let absentEmployees = [];

let totalPresent = 0;
let totalAbsent = 0;

for (let employee in employees) {

    if (employees[employee] === "Present") {
        presentEmployees.push(employee);
        totalPresent++;
    } else {
        absentEmployees.push(employee);
        totalAbsent++;
    }
}

console.log("Present Employees:");
console.log(presentEmployees);

console.log("Absent Employees:");
console.log(absentEmployees);

console.log("Total Present: " + totalPresent);
console.log("Total Absent: " + totalAbsent);