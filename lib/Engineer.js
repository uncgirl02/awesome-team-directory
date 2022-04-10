const Employee = require('./Employee.js')

class Engineer extends Employee {
  constructor (github) {  
    super(role, name, id, email);

    this.role = role  
    this.github = github
  }

  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;