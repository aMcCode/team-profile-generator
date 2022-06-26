const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)

        this.officeNumber = officeNumber;
    }

    getOfficeNum() {
        return this.officeNumber;
    }

    getRole() {
        return 'manager';
    }
}

module.exports = Manager;