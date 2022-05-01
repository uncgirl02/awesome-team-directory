const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Cindy', 3, 'cindy@123.com', 'cindylouwho');
  
    expect(engineer.name).toBe('Cindy');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
  });

  test ('returns github username', () => {
    const engineer = new Engineer( 'David', 2, 'david@123.com', 'github');
    expect(engineer.getGithub()).toEqual(expect.any(String));
  });

 