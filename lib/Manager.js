const Employee = require('./Employee.js')

class Manager extends Employee {
  constructor(officeNumber) {
    super(role, name, id, email); 

    this.role = role   
    this.officeNumber = officeNumber
  }

  getOfficeNumber() {
      return this.officeNumber;
  }
}

module.exports = Manager;