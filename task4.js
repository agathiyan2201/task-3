let choice = Number(prompt("Enter your choice (1-5):"));

switch (choice) {
    case 1:
        console.log("You Ordered Pizza");
        break;

    case 2:
        console.log("You Ordered Burger");
        break;

    case 3:
        console.log("You Ordered Shawarma");
        break;

    case 4:
        console.log("You Ordered Biryani");
        break;

    case 5:
        console.log("You Ordered Juice");
        break;

    default:
        console.log("Invalid Choice");
}