const { sendWelcomeEmail } = require("./emailSender");

test('should send a welcome email with username',() =>{
    const mockSend = jest.fn();//create a mock function

    const mockEmailService = {
      send:mockSend,
    }

    const user = {name:'Alice'};

    sendWelcomeEmail(user,mockEmailService)

    //Check that the mock was called once
    expect(mockSend).toHaveBeenCalledTimes(1);

    //check that it was called with the expected message
    //console.log('Expected message:Welcome,${user.name}!');
    //console.log(mockSend.mock.calls);

    expect(mockSend).toHaveBeenCalledWith('Welcome,Alice');
});