const fizzbuzz = require ("../Katas/fizzbuzz")

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

const numDivisible = require ("./divisibles")

  test ('funcio que rebi una llista de numeros i un numero', ()=> {

   const numList = [1,2,3,4,5]
   const num = 2
   let result= numDivisible (numList, num)

   expect (result).toMatchObject ([2,4])
})
const arrayObjectes = require ("./arrayobjectes")

       test ('funcio que retorna un array amb majors edat', ()=> {

            const usuaris= [
               {nom:"Maria", edat: 21},
               {nom:"Josep", edat: 11},
               {nom:"Antoni", edat: 46}
           ]

           let result = arrayObjectes (usuaris)
            
           expect (result)
           .toMatchObject ([{nom:"Maria", edat: 21},{nom:"Antoni", edat:46}])
       })
   
const calculator = require ("./calculadora")

        test ('funcio que suma un numero al total de la calculadora', ()=> {
            
            const calculator = [1,2,3,4,5,6,7,8,9]

            let result = calculadora (newCalculadora)
            expect (result).getTotal(),equalTo(0,0)

        })