function formatPhoneNumber(numbers) {
    const areaCode = numbers.slice(0, 3).join("");
    const prefix = numbers.slice(3, 6).join("");
    const lineNumbers = numbers.slice(6).join("");
    return `(${areaCode}) ${prefix}-${lineNumbers}`;
}

console.log(formatPhoneNumber([7,7,2,9,0,8,4,8,7,2]));
console.log(formatPhoneNumber([7,0,9,3,3,6,4,8,7,5]));