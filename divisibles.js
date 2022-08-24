const numDivisible = (numList, num) => {
    let newArray=[]
    for (let i= 0; i<numList.length; i ++){
        if ( numList[i] %num ==0){
            newArray.push (numList[i])
        }
    }
    return newArray
}
module.exports = numDivisible;