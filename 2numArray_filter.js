const numArray = (numList, num) => {
    
    let filterArray =numList.filter(item => item % num == 0)
    return filterArray
}




module.exports = numArray