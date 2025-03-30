const fizzBuzz = require("./FizzBuzz");

test("",()=>{
    expect(fizzBuzz(15)).toBe('FizzBuzz');
});
test("",()=>{
    expect(fizzBuzz(9)).toBe("Fizz");
});
test("",()=>{
    expect(fizzBuzz(10)).toBe("Buzz");
});