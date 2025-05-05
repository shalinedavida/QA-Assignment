// const {add,subtract,divide} = require("./math");

const { add, subtract, divide, multiply } = require("./math");

 
test('should return 5 when 2 and 3 added',()=>{
    expect(add(2,3)).toBe(5);
});



test('subtract 3 and 2 to equal 1',()=>{
    expect(subtract(3,2)).toBe(1);
});


test('divide 6 and 3 to equal 2',()=>{
    expect(divide(6,3)).toBe(2);
});

test('multiply 6 and 3 to equal 18',()=>{
    expect(multiply(6,3)).toBe(18);
});



