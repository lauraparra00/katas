const numArray = require("./2numArray")

test('recibe otro array con los numeros divisibles por el numero que le hemos pasado', () => {
    let numList = [1,2,3,4,5,6,7,8,9,10]
    let num = 2

    let result = numArray(numList, num);
    expect(result).toContain (2,4,6,8,10);

})