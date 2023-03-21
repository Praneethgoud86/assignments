function countOccurrences(str1, str2) {
    let count = 0;
    let index = -1;
  
    while ((index = str2.indexOf(str1, index + 1)) !== -1) {
      count++;
    }
  
    return count;
  }
  
  const str1 = "the";
  const str2 = "The quick brown fox jumped over the lazy dog. The end.";
  console.log(countOccurrences(str1, str2)); // Output: 2
  