function sendWelcomeEmail(user,emailService){
    emailService.send(`Welcome,${user.name}`);
}
module.exports = {sendWelcomeEmail};