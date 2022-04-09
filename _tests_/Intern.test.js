const Intern = require('../lib/Intern');

test('creates an emplyee object', () => {
    const intern = new Intern('Intern', 'David', 2, 'david@123.com', 'UNC');
  
    expect(intern.role).toBe('Intern');
    expect(intern.name).toBe('David');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
  });

test ('returns name of school', () => {
  const intern = new Intern('Intern', 'David', 2, 'david@123.com', 'UNC');
  expect(intern.getSchool()).toEqual(expect.any(String));
});

test ('returns employee role', () => {
  const intern = new Intern('Intern', 'David', 2, 'david@123.com', 'github');
  expect(intern.getRole()).toBe('Intern');
});