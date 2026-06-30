let namee = prompt("Enter Name:");
let agee = prompt("Enter Age:");

let terms = confirm("Do you accept Terms?");

if (terms) {
    alert("Registered Successfully");

    console.log("Name: " + namee);
    console.log("Age: " + agee);
} else {
    alert("Registration Cancelled");
}