
// const Manager = require ('../lib/Manager.js')
// const Engineer = require ('../lib/Engineer.js')
// const Intern = require ('../lib/Engineer.js')




function generateInternHTML(roles) {
  if (roles.Interns.length == 0) {
    return "";
  } else {
  for (let i = 0; i < roles.Interns.length; i++) {

  return `
    <section class="employee-cards container">
          <div class="row d-flex justify-content-around"> 
    
            <div class="card col-3 p-0 m-3 shadow">
              <div class="card-header bg-info">
                <h2></h2>
                <div class="d-flex d-inline">  
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-book-fill" viewBox="0 0 16 16">
                     <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                    </svg>
                  <h3 class="ms-3">${roles.Interns.role}</h3>
                </div>
              </div>
            
              <div class ="content bg-light p-3">
                <ul class="list-group list-group">
                  <li class="list-group-item">ID: ${roles.Interns.id}</li>
                  <li class="list-group-item">E-mail: <a href="mailto:${roles.Interns.email}">${roles.Interns.email}</a></li>
                  <li class="list-group-item">School: ${roles.Interns.school}</li>
                </ul>
              </div>
            </div>`
    }
  }
}

function generateEngineerHTML (roles) {
  if (roles.Engineers.length == 0) {
    return "";
  } else {
  for (let i = 0; i < roles.Engineers.length; i++) {

  return `
    <section class="employee-cards container">
          <div class="row d-flex justify-content-around"> 
    
            <div class="card col-3 p-0 m-3 shadow">
              <div class="card-header bg-info">
                <h2></h2>
                <div class="d-flex d-inline">  
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-laptop-fill" viewBox="0 0 16 16">
                    <path d="M2.5 2A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                  </svg>
                  <h3 class="ms-3">${roles.Engineers.role}</h3>
                </div>
              </div>
            
              <div class ="content bg-light p-3">
                <ul class="list-group list-group">
                  <li class="list-group-item">ID: ${roles.Engineers.id}</li>
                  <li class="list-group-item">E-mail: <a href="mailto:${roles.Engineers.email}">${roles.Engineers.email}</a></li>
                  <li class="list-group-item">GitHub Username: <a href="https://github.com/${roles.Engineers.github}">${roles.Engineers.github}</a></li>
                </ul>
              </div>
            </div>`

    }
  }
}

function generateManagerHTML(roles) { 
  if (roles.Managers.length == 0) {
    return "";
  } else {
  for (let i = 0; i < roles.Managers.length; i++) {

    return `
    <section class="employee-cards container">
          <div class="row d-flex justify-content-around"> 
    
            <div class="card col-3 p-0 m-3 shadow">
              <div class="card-header bg-info">
                <h2></h2>
                <div class="d-flex d-inline">  
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-cup-fill" viewBox="0 0 16 16">
                <path d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8z"/>
              </svg>
                  <h3 class="ms-3">${roles.Managers.role}</h3>
                </div>
              </div>
            
              <div class ="content bg-light p-3">
                <ul class="list-group list-group">
                  <li class="list-group-item">ID: ${roles.Managers.id}</li>
                  <li class="list-group-item">E-mail: <a href="mailto:${roles.Managers.email}">${roles.Managers.email}</a></li>
                  <li class="list-group-item">Office Number: ${roles.Managers.officeNumber}</li>
                </ul>
              </div>
            </div>`;
    }
  }
}

function generateHTML(roles) {
  return `
  <!DOCTYPE html>
  <html>
  
  <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>My Awesome Team</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link rel="stylesheet" href="./src/style.css">
  </head>
  
  <body>
      
      <header class="header">
          <h1 class="header-title">My Awesome Team</h1>
      </header>
      
      ${generateManagerHTML(roles)}

      ${generateEngineerHTML(roles)}

      ${generateInternHTML(roles)}
  
  </body>
  </html>    
`
}



module.exports = generateHTML

    
   