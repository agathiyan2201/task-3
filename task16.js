// Employee Management System (Console Version)

let employeees = [];

while (true) {
    let choice = prompt(
        `========== Employee Management System ==========
1. Add Employee
2. View All Employees
3. Search Employee by ID
4. Calculate Salary with Bonus
5. Check Experience Level
6. Delete Employee
7. Exit

Enter your choice:`
    );

    switch (choice) {

        // Add Employee
        case "1":
            let id = prompt("Enter Employee ID:");
            let name = prompt("Enter Employee Name:");
            let age = Number(prompt("Enter Age:"));
            let department = prompt("Enter Department:");
            let salary = Number(prompt("Enter Salary:"));
            let experience = Number(prompt("Enter Experience (Years):"));

            let employee = {
                id,
                name,
                age,
                department,
                salary,
                experience
            };

            employeees.push(employee);
            console.log("Employee Added Successfully!");
            break;

        // View All Employees
        case "2":
            if (employeees.length === 0) {
                console.log("No Employees Found.");
            } else {
                console.log("------ Employee List ------");

                for (let emp of employeees) {
                    console.log(`
ID          : ${emp.id}
Name        : ${emp.name}
Age         : ${emp.age}
Department  : ${emp.department}
Salary      : ${emp.salary}
Experience  : ${emp.experience} Years
--------------------------------`);
                }
            }
            break;

        // Search Employee by ID
        case "3":
            let searchId = prompt("Enter Employee ID:");

            let found = false;

            for (let emp of employeees) {
                if (emp.id === searchId) {
                    console.log(`
Employee Found
ID: ${emp.id}
Name: ${emp.name}
Department: ${emp.department}
Salary: ${emp.salary}`);
                    found = true;
                    break;
                }
            }

            if (!found) {
                console.log("Employee Not Found.");
            }
            break;

        // Calculate Salary with Bonus
        case "4":
            let bonusId = prompt("Enter Employee ID:");

            let bonusFound = false;

            for (let emp of employeees) {

                if (emp.id === bonusId) {

                    let bonus = 0;

                    if (emp.experience >= 10) {
                        bonus = emp.salary * 0.20;
                    } else if (emp.experience >= 5) {
                        bonus = emp.salary * 0.10;
                    } else {
                        bonus = emp.salary * 0.05;
                    }

                    console.log(`
Employee: ${emp.name}
Salary: ${emp.salary}
Bonus: ${bonus}
Total Salary: ${emp.salary + bonus}`);

                    bonusFound = true;
                    break;
                }
            }

            if (!bonusFound) {
                console.log("Employee Not Found.");
            }

            break;

        // Check Experience Level
        case "5":

            let expId = prompt("Enter Employee ID:");

            let expFound = false;

            for (let emp of employeees) {

                if (emp.id === expId) {

                    let level = "";

                    if (emp.experience < 2) {
                        level = "Fresher";
                    } else if (emp.experience < 5) {
                        level = "Junior";
                    } else if (emp.experience < 10) {
                        level = "Senior";
                    } else {
                        level = "Expert";
                    }

                    console.log(`${emp.name} is a ${level} Employee.`);

                    expFound = true;
                    break;
                }
            }

            if (!expFound) {
                console.log("Employee Not Found.");
            }

            break;

        // Delete Employee
        case "6":

            let deleteId = prompt("Enter Employee ID:");

            let deleted = false;

            for (let i = 0; i < employeees.length; i++) {

                if (employees[i].id === deleteId) {
                    employees.splice(i, 1);
                    console.log("Employee Deleted Successfully.");
                    deleted = true;
                    break;
                }
            }

            if (!deleted) {
                console.log("Employee Not Found.");
            }

            break;

        // Exit
        case "7":
            console.log("Thank You! Exiting Employee Management System.");
            break;

        default:
            console.log("Invalid Choice!");
    }

    if (choice === "7") {
        break;
    }
}