const fizzbuzz = (num) => {
    
    if (num % 3 == 0){
        resultat = "fizz"
    }
    if (num % 5 == 0){
        resultat = "buzz"
    }
    if (num % 3 == 0 && num % 5 == 0){
        resultat = "fizzbuzz"
    }
    if (num % 3 !== 0 && num % 5 !== 0){
        resultat = num 
}
return num
}


module.exports = fizzbuzz;