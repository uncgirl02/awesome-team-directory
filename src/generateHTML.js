

const generateTeam = team => {

  const generateInternHTML = Intern => {
    return `
    <div class="card col-3 p-0 m-3 shadow">
      <div class="card-header bg-info">
        <h2>${Intern.getName()}</h2>
        <div class="d-flex d-inline">  
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-book-fill" viewBox="0 0 16 16">
            <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
            </svg>
          <h3 class="ms-3">${Intern.getRole()}</h3>
        </div>
      </div>
    
      <div class ="content bg-light p-3">
        <ul class="list-group list-group">
          <li class="list-group-item">ID: ${Intern.getId()}</li>
          <li class="list-group-item">E-mail: <a href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</a></li>
          <li class="list-group-item">School: ${Intern.getSchool()}</li>
        </ul>
      </div>
    </div>`;
  };

  const generateEngineerHTML = Engineer => {
    return `
    <div class="card col-3 p-0 m-3 shadow">
      <div class="card-header bg-info">
        <h2>${Engineer.getName()}</h2>
        <div class="d-flex d-inline">  
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-laptop-fill" viewBox="0 0 16 16">
            <path d="M2.5 2A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
          </svg>
          <h3 class="ms-3">${Engineer.getRole()}</h3>
        </div>
      </div>
    
      <div class ="content bg-light p-3">
        <ul class="list-group list-group">
          <li class="list-group-item">ID: ${Engineer.getId()}</li>
          <li class="list-group-item">E-mail: <a href="mailto:${Engineer.getId()}">${Engineer.getEmail()}</a></li>
          <li class="list-group-item">GitHub Username: <a href="https://github.com/${Engineer.getGithub()}">${Engineer.getGithub()}</a></li>
        </ul>
      </div>
    </div>`;
  };

  const generateManagerHTML = Manager => {
    return `
    <div class="card col-3 p-0 m-3 shadow">
      <div class="card-header bg-info">
        <h2>${Manager.getName()}</h2>
        <div class="d-flex d-inline">  
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-cup-fill" viewBox="0 0 16 16">
        <path d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8z"/>
      </svg>
          <h3 class="ms-3">${Manager.getRole()}</h3>
        </div>
      </div>
    
      <div class ="content bg-light p-3">
        <ul class="list-group list-group">
          <li class="list-group-item">ID: ${Manager.getId()}</li>
          <li class="list-group-item">E-mail: <a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a></li>
          <li class="list-group-item">Office Number: ${Manager.getOfficeNumber()}</li>
        </ul>
      </div>
    </div>`;
  };

  const html = [];
  html.push(team.Managers
    .map(Manager => generateManagerHTML(Manager)));
  html.push(team.Engineers
    .map(Engineer => generateEngineerHTML(Engineer))
    .join(""));
  html.push(team.Interns
    .map(Intern => generateInternHTML(Intern))
    .join(""));
  return html.join("");
}

module.exports = team => {
  return `
  <!DOCTYPE html>
  <html>
  
  <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>My Awesome Team</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
  </head>
  
  <body>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 jumbotron mb-3 header bg-danger p-4 text-white">
          <h1 class="text-center">My Awesome Team</h1>
        </div>
     </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="employee-cards col-12 d-flex flex-wrap justify-content-center">
        ${generateTeam(team)}
      </div>
    </div>
  </div>
  
  </body>
  </html>    
`;
};

