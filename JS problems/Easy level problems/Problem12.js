function getLargestNumbers(arrays) {
    let largestNumbers = [];

    for (let i=0; i< arrays.length; i++) {
      let  largestNumber = arrays[i][0];
        for (let j = 1; j < arrays[i].length; j++) {
        if (arrays[i][j] > largestNumber) {    
        largestNumber = arrays[i][j];
        }
    } 
    largestNumbers.push(largestNumber);
    }
    return largestNumbers;
}
 
console.log([[3,2,1],[7,3,5],[12,66,34]]);