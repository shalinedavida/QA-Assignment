
    const signup = require('./signup'); // Adjust the path as needed
    const userRepository = require('./userRepository'); // Example dependency

    jest.mock('./userRepository'); // Mock the user repository

    describe('signup', () => {
      afterEach(() => {
        jest.clearAllMocks(); // Reset mocks after each test
      });

      it('should successfully create a new user with valid data', async () => {
        const userData = {
          email: 'test@example.com',
          password: 'Password123!',
          name: 'Test User',
        };
        userRepository.createUser.mockResolvedValue(userData); // Mock successful user creation

        const result = await signup(userData);

        expect(result).toEqual(userData);
        expect(userRepository.createUser).toHaveBeenCalledWith(userData);
      });

      it('should return an error if email is missing', async () => {
        const userData = { password: 'Password123!', name: 'Test User' };
    
        await expect(signup(userData)).rejects.toThrow("Email is required");
        expect(userRepository.createUser).not.toHaveBeenCalled();
      });

      it('should return an error if email already exists', async () => {
          const userData = {
            email: 'existing@example.com',
            password: 'Password123!',
            name: 'Test User',
          };
          userRepository.findUserByEmail.mockResolvedValue(userData);
    
          await expect(signup(userData)).rejects.toThrow('Email already exists');
          expect(userRepository.createUser).not.toHaveBeenCalled();
        });
    });