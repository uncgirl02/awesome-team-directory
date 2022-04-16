const inquirer = require ("inquirer")
const fs = require('fs')
const generateHTML = require ('./src/GenerateHTML.js')

const Manager = require ('./lib/Manager')
const Engineer = require ('./lib/Engineer')
const Intern = require ('./lib/Intern')

let roles = {Managers:[], Interns:[], Engineers:[]}

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
            
            return promptData(directoryData);
        } else {
          return directoryData;  
        };
    })
    .then(directoryData => {
      let role = directoryData.role
    
        if (role === "Engineer") {
            const newEngineer = new Engineer (name, id, email, github);
            roles.Engineers.push(newEngineer)  
        }
        if (role === "Manager") {
            employee = new Manager (name, id, email, officeNumber);
            roles.Managers.push(newManager)    
        } 
        else if (role === "Intern") {
            employee = new Intern (name, id, email, school)
            roles.Interns.push(newIntern);
        }
    })      
};

function writeToFile (directoryData) {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/index.html", directoryData, err => {
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


// Create a function to initialize app
function init() {
    promptData()
    .then(directoryData => {
    return generateHTML()
      return writeToFile(directoryData);
    })
    .catch(err => {
    console.log(err);
    });
}

// Function call to initialize app
init()

