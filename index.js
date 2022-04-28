const inquirer = require ("inquirer")
const fs = require('fs')
const generateHTML = require ('./src/GenerateHTML.js')

const Manager = require ('./lib/Manager')
const Engineer = require ('./lib/Engineer')
const Intern = require ('./lib/Intern')

let roles = { Managers:[], Interns:[], Engineers:[] }

function promptData() {
    console.log(`
    ==================
    Add a New Employee
    ==================
    `);
    
    // If there is no 'employees' array property, create one

    // if (!roles) {
    //     roles = {};
    // }
    
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
      console.log(answers);
      // for (let i = 0; i < answers.length; i++) {
        let employeeRole = answers.role
        console.log(employeeRole);
        if (employeeRole === "Engineer") {
          const newEngineer = new Engineer (answers.name, answers.id, answers.email, answers.github);
          roles.Engineers.push(newEngineer)
        }
        if (employeeRole === "Manager") {
            const newManager = new Manager (answers.name, answers.id, answers.email, answers.officeNumber);
            roles.Managers.push(newManager)    
        } 
        if (employeeRole === "Intern") {
            const newIntern = new Intern (answers.name, answers.id, answers.email, answers.school)
            roles.Interns.push(newIntern);
            console.log(roles);
        }
        if (answers.confirmAddEmployee) {
              console.log(roles);
              promptData(roles);
        } 
      // }
    })
};


function writeToFile (filename) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, generateHTML(roles), err => {
            if (err) {
              reject(err);
              return;
            }
      
            resolve({
              ok: true,
              message: 'File created!'
            });
        });
    });
};


function init() {
  promptData()
      .then(
          writeToFile("./dist/index.html") 
      );
};

    
// Function call to initialize app
init()

// function(params){
  
//   //use params to execute some logic
//   var biggerValue = params + 1;

//   return something;
// }