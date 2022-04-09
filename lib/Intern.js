const Employee = require('./Employee')

class Intern extends Employee {
    constructor(school, role) {
        super(name, id, email);

        this.role = role
        this.school = school;
    }

    getSchool() {
        return this.school;       
    }
}

module.exports = Intern;