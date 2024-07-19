const inquirer = require('inquirer');
const { getDepartments, getRoles, getEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole } = require('./db/queries');

async function mainMenu() {
  const answers = await inquirer.prompt([{
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: [
      'View all departments',
      'View all roles',
      'View all employees',
      'Add a department',
      'Add a role',
      'Add an employee',
      'Update an employee role',
    ],
  }]);

  switch (answers.action) {
    case 'View all departments':
      const departments = await getDepartments();
      console.log(departments);
      break;
    case 'View all roles':
      const roles = await getRoles();
      console.log(roles);
      break;
    case 'View all employees':
      const employees = await getEmployees();
      console.log(employees);
      break;
    case 'Add a department':
      // Add code to handle adding a department
      break;
    case 'Add a role':
      // Add code to handle adding a role
      break;
    case 'Add an employee':
      // Add code to handle adding an employee
      break;
    case 'Update an employee role':
      // Add code to handle updating an employee role
      break;
    default:
      console.log('Invalid action');
  }

  mainMenu();  // Call mainMenu again to allow for more actions
}

mainMenu();
