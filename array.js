function largestNumber(array){
    if (array.length ===0){
        return undefined
    }
    return Math.max(...array)

}
module.exports= largestNumber;