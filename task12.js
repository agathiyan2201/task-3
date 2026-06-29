let name = prompt("Enter Name:");
let age = prompt("Enter Age:");

let terms = confirm("Do you accept Terms?");

if (terms) {
    alert("Registered Successfully");

    console.log("Name: " + name);
    console.log("Age: " + age);
} else {
    alert("Registration Cancelled");
}