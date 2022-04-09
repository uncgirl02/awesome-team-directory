const Employee = require('./Employee')

class Engineer extends Employee {
  constructor () {  
    super();

    this.role = "Engineer"  
    this.github = github
  }

  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;