function reverseCase(str) {
    let result ="";

    for (i = 0; i< str.length; i++) {
        let char = str[i];
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        }else {
            result += char.toUpperCase();
        }
    }
    return result;
}

const str = "Praneeth Goud";
console.log(reverseCase(str));