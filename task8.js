let mobile = prompt("Enter Mobile Number:");

if (
    mobile.length === 10 &&
    (mobile.startsWith("6") ||
     mobile.startsWith("7") ||
     mobile.startsWith("8") ||
     mobile.startsWith("9"))
) {
    console.log("Valid Mobile Number");
} else {
    console.log("Invalid Mobile Number");
}