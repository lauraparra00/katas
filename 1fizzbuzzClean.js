const fizzbuzz = require("./1fizzbuzz");

function getFizzBuzz (n) {
    
    const fizz = (n % 3) === 0;
    const buzz = (n % 5) === 0;
    const fizzbuzz = fizz & buzz;

    if (fizzbuzz){
        return "FizzBuzz";
    }

    if (fizz){
        return "Fizz";
    }

    if (buzz){
        return "Buzz";
    }
    return num
}
module.exports = fizzbuzz;