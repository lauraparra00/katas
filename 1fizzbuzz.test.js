const fizzbuzz = require ("./1fizzbuzz")

test ('retorna fizz si es divisible entre 3',() => {
    let result = fizzbuzz(3)
    expect(result).toBe ("fizz")
})

test ('retorna buzz si es divisible entre 5', () => {
    let result = fizzbuzz(5)
    expect(result).toBe ("buzz")
})

test ('retorna fizzbuzz si es divisible entre 3 i 5', () => {
    let result = fizzbuzz (15)
    expect (result).toBe ("fizzbuzz")
})   

test ('retorna parametre (num) si No es divisible entre 3 i 5',() => {
    let result = fizzbuzz (2)
    expect (result).toBe (2)
})

