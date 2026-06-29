

let burger = 150;
let pizza = 300;
let juice = 80;

let subtotal = burger + pizza + juice;

let gst = (subtotal * 18) / 100;


let grandTotal = subtotal + gst;

console.log("Subtotal: " + subtotal);
console.log("GST 18%: " + gst);
console.log("Grand Total: " + grandTotal);