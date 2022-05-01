const Employee = require('../lib/Employee');

test('creates an emplyee object', () => {
    const employee = new Employee('Mark', 14, 'dye@hotmail.com');
  
    expect(employee.name).toBe('Mark');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});

test ('returns employee name', () => {
    const employee = new Employee('David', 2, 'david@123.com');
    expect(employee.getName()).toEqual(expect.any(String));
  });

test ('returns employee ID number', () => {
const employee = new Employee('David', 2, 'david@123.com');
expect(employee.getId()).toEqual(expect.any(Number));
});

test ('returns employee email', () => {
const employee = new Employee('David', 2, 'david@123.com');
expect(employee.getEmail()).toEqual(expect.any(String));
});

