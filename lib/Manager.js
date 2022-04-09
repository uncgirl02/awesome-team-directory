const Employee = require('./Employee')

class Manager extends Employee {
  constructor() {
    super(); 

    this.role = "Manager"    
    this.officeNumber = officeNumber
  }

  getOfficeNumber() {
      return this.officeNumber;
  }
}

module.exports = Manager;