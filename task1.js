let age = Number(prompt("Enter Employee Age:"));
let idAvailable = prompt("Is Employee ID Available? (true/false):") === "true";
let attendance = Number(prompt("Enter Attendance Percentage:"));

if (age >= 18 && idAvailable && attendance >= 75) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}