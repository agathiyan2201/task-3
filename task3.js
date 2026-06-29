let balance = 5000;
let withdraw = 3000;

if (withdraw <= balance && withdraw % 100 === 0) {
    balance = balance - withdraw;
    console.log("Transaction Successful");
    console.log("Remaining Balance: " + balance);
} else {
    console.log("Transaction Failed");
}