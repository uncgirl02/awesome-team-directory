const Intern = require('../lib/Intern');

test('creates an emplyee object', () => {
    const intern = new Intern('intern', 'David', 2, 'david@123.com', 'UNC');
  
    expect(intern.role).toBe('intern');
    expect(intern.name).toBe('David');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
  });