function findUnique(arr) {
    const countMap = new Map();
  
    for (let i = 0; i < arr.length; i++) {
      if (countMap.has(arr[i])) {
        countMap.set(arr[i], countMap.get(arr[i]) + 1);
      } else {
        countMap.set(arr[i], 1);
      }
    }
  
    for (let [key, value] of countMap) {
      if (value === 1) {
        return key;
      }
    }
  
    return null; // No unique element found
  }
  
  const arr = [1, 2, 2, 3, 3, 4, 4, 5, 5];
  console.log(findUnique(arr)); 
  