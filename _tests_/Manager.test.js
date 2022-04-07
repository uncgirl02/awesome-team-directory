const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('manager', 'Erin', 24, 'ems1980@hotmail.com', 215);
  
    expect(manager.role).toBe('manager');
    expect(manager.name).toBe('Erin');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
  });