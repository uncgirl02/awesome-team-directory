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
          return promptData(directoryData);
        } else {
          return directoryData;
        };
      }); 
          
}




function generateHTML(answers) {
    return `

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Random Pet Facts</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="./dist/style.css">
</head>

<body>
    <header>
        <h1 class = "bg-primary text-white">My Awesome Team</h1>
    </header>

    <section class="employee-cards bg-light">
        <div class="employee-card
    </section>

</body>
</html>    
`;
}

promptData()