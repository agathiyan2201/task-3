let purchase = Number(prompt("Enter Purchase Amount:"));
let isPremium = prompt("Are you a Premium User? (yes/no):").toLowerCase();

let discount = 0;

if (purchase > 5000 && isPremium === "yes") {
    discount = purchase * 0.20; // 20% discount
} else {
    discount = purchase * 0.10; // 10% discount
}

let finalPrice = purchase - discount;

console.log("Original Price: " + purchase);
console.log("Discount: " + discount);
console.log("Final Price: " + finalPrice);