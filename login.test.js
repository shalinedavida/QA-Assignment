

// const {login} = require ('./login');
// describe('login', () => {
//   let mockFetch;

//   beforeEach(() => {
//     mockFetch = jest.fn();
//     login.fetch = mockFetch; 
//   });

//   test('should log in successfully with valid credentials', async () => {
//     mockFetch.mockResolvedValue
//     Promise.resolve({ data: { user: { id: 1, name: 'Test User' } } });

//     const result = await login('test@example.com', 'password123');

//     expect(result).toBe(true);
//   });

//   test('should handle invalid credentials', async () => {
 
//     mockFetch.mockResolvedValue
//     Promise.resolve({ status: 401, data: { message: 'Invalid credentials' } });

//     const result = await login('invalid@example.com', 'wrongPassword');

//     expect(result).toBe(false);
//   });
// });
// login.test.js
const login = require('./login'); 
const assert = require('chai').assert; 

describe('Login Function', () => {
  it('should return true for valid credentials', () => {
    assert.strictEqual(login('validUser', 'validPassword'), true, 'Login with valid credentials should return true');
  });

  it('should return false for invalid username', () => {
     assert.strictEqual(login('invalidUser', 'validPassword'), false, 'Login with invalid username should return false');
  });

  it('should return false for invalid password', () => {
    assert.strictEqual(login('validUser', 'invalidPassword'), false, 'Login with invalid password should return false');
  });

  it('should handle empty username and password', () => {
    assert.strictEqual(login('', ''), false, 'Login with empty username and password should return false');
  });
});