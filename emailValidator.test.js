const isValidEmail = require("./emailValidator")

test("",()=>{
    expect(isValidEmail()).toBe(false);
});