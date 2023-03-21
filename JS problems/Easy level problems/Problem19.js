function multiplyByTwo(num) {
    return num * 2;
}
function loopAndMultiply(n) {
    for (let i = 1; i <= n; i++) {
        let result = multiplyByTwo(i);
        console.log(result);
    }
}

loopAndMultiply(5);