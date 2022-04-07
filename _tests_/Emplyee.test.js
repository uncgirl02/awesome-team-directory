const Employee = require('../lib/Employee');

test('creates an emplyee object', () => {
    const employee = new Employee('employee', 'Mark', 14, 'dye@hotmail.com');
  
    expect(employee.role).toBe('employee');
    expect(employee.name).toBe('Mark');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

  });