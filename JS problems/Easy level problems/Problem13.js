function getSecondLargestNumber(numbers) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > largest) {
        secondLargest = largest;
        largest = numbers[i];
      } else if (numbers[i] > secondLargest && numbers[i] !== largest) {
        secondLargest = numbers[i];
      }
    }
  
    return secondLargest;
  }
  
  console.log(getSecondLargestNumber([3, 5, 2, 8, 9])); 
  console.log(getSecondLargestNumber([12, 24, 10, 30, 40, 20])); 
  