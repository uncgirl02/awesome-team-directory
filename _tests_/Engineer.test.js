const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('engineer', 'Cindy', 3, 'cindy@123.com', 'cindylouwho');
  
    expect(engineer.role).toBe('engineer');
    expect(engineer.name).toBe('Cindy');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
  });