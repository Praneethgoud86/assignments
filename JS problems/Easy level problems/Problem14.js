function removeDuplicates(arr) {
    const uniqueArr = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (!uniqueArr.includes(arr[i])) {
        uniqueArr.push(arr[i]);
      }
    }
  
    return uniqueArr;
  }
  
  const arr = [1, 3, 4, 1, 6, 8, 4, 9, 9, 2];
  console.log(removeDuplicates(arr)); 
  