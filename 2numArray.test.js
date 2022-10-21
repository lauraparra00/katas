const numArray = require("./2numArray")

test ('funcion que reciba una lista de numeros y un numero', () => {

    const numList = [0,1,2,3,4,5,6,7,8,9,10]

    let result = numArray(numList, 2)

    function x (numList, num) {

        let i = 0
        while (i<numList.lenght){

            if(numList[i]%num!==0){
                numList.splice(i,2)
            }else{
                console.log(i)
            }
        }

        let numList1 = numList
        return numList1
    }
        x(numList, );
        expect(result).toBe(numList.map (div()))

})