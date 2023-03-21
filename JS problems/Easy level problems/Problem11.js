function sortStringByLength(strings) {
    return strings.sort((a,b) => a.length - b.length);
}

console.log(sortStringByLength(["monkey","cat","zebra","rat","crocodile"]));