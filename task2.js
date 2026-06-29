let marks = Number(prompt("Enter Marks:"));

if (marks >= 90 && marks <= 100) {
    console.log("Grade A+");
} else if (marks >= 80 && marks <= 89) {
    console.log("Grade A");
} else if (marks >= 70 && marks <= 79) {
    console.log("Grade B");
} else if (marks >= 60 && marks <= 69) {
    console.log("Grade C");
} else {
    console.log("Fail");
}