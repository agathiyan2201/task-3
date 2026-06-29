

let employees = [];

function addEmployee() {
    let id = employees.length + 1;
    let name = "Employee" + id;
    let salary = 30000;
    let experience = 2;

    let employee = {
        id: id,
        name: name,
        salary: salary,
        experience: experience
    };

    employees.push(employee);

    console.log(`Employee Added Successfully!
ID: ${id}
Name: ${name}`);
}



function viewEmployees() {

    if (employees.length === 0) {
        console.log("No Employees Found");
    } else {

        console.log("Employee List:");

        for (let emp of employees) {
            console.log(`
ID: ${emp.id}
Name: ${emp.name}
Salary: ${emp.salary}
Experience: ${emp.experience} years
`);
        }
    }
}


function searchEmployee() {

    let searchId = 1;

    let found = false;

    for (let emp of employees) {

        if (emp.id === searchId) {
            console.log(`
Employee Found:
ID: ${emp.id}
Name: ${emp.name}
Salary: ${emp.salary}
`);
            found = true;
        }
    }

    if (!found) {
        console.log("Employee Not Found");
    }
}


function calculateSalary() {

    for (let emp of employees) {

        let bonus;

        if (emp.experience >= 5) {
            bonus = emp.salary * 20 / 100;
        } 
        else {
            bonus = emp.salary * 10 / 100;
        }

        let totalSalary = emp.salary + bonus;

        console.log(`
${emp.name}
Bonus: ${bonus}
Total Salary: ${totalSalary}`);
    }
}


function experienceLevel() {

    for (let emp of employees) {

        if (emp.experience >= 5) {
            console.log(`${emp.name}: Senior Employee`);
        } 
        else {
            console.log(`${emp.name}: Junior Employee`);
        }
    }
}


function deleteEmployee() {

    let deleteId = 1;

    employees = employees.filter(
        emp => emp.id !== deleteId
    );

    console.log("Employee Deleted");
}



let choice = 1;

switch(choice) {

    case 1:
        addEmployee();
        break;

    case 2:
        viewEmployees();
        break;

    case 3:
        searchEmployee();
        break;

    case 4:
        calculateSalary();
        break;

    case 5:
        experienceLevel();
        break;

    case 6:
        deleteEmployee();
        break;

    case 7:
        console.log("Exit System");
        break;

    default:
        console.log("Invalid Choice");
}