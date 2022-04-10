const inquirer = require ("inquirer")
const fs = require('fs')

const promptData = directoryData => {
    console.log(`
    ==================
    Add a New Employee
    ==================
    `);
    
    // If there is no 'employees' array property, create one
    if (!directoryData) {
        directoryData = [];
    }
    
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the employee's first and last name.",
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Please enter the employee's name!");
                  return false;
                }
              }
        },
        {
            type: 'number',
            name: 'id',
            message: "Please enter the employee's ID number.",
            validate: idInput => {
                if (idInput) {
                  return true;
                } else {
                  console.log("Please enter the emplyee's ID!");
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's e-mail address.",
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log("Please enter the emplyee's e-mail address!");
                  return false;
                }
              }
        },
        {
            type: 'list',
            name: 'role',
            message: "What is this employee's role?",
            choices: ['Manager', 'Engineer', 'Intern'],
            validate: roleInput => {
                if (roleInput) {
                  return true;
                } else {
                  console.log("Please choose the emplyee's role!");
                  return false;
                }
              }
        },
        {
            type: 'number',
            name: 'officeNumber',
            message: "What is this employee's office number?",
            when:(answers) => answers.role == 'Manager',
            validate: officeInput => {
                if (officeInput) {
                  return true;
                } else {
                  console.log("Please enter the employee's office number!");
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is this employee's GitHub username?",
            when: (answers) => answers.role == 'Engineer',
            validate: githubInput => {
                if (githubInput) {
                  return true;
                } else {
                  console.log("Please enter the employee's GitHub username!");
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'school',
            message: "What is this employee's school?",
            when: (answers) => answers.role == 'Intern',
            validate: schoolInput => {
                if (schoolInput) {
                  return true;
                } else {
                  console.log("Please enter the emplyee's school!");
                  return false;
                }
              }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to enter another employee?',
            default: false
        }
    ])
    .then(answers => {
        directoryData.push(answers);
        if (answers.confirmAddEmployee) {
            console.log(directoryData);
            console.log(promptData(directoryData));
            return promptData(directoryData);
        } else {
          return directoryData;
          
        };
      }); 
          
}






promptData()