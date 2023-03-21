function getGreatestNumber(a, b, c) {
    let greatest = (a > b) ? a : b;
    greatest = (greatest >c) ? greatest : c;
    return greatest;
}

 console.log(getGreatestNumber(4,8,2));