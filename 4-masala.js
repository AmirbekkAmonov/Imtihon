function removeABC(str) {
    if (!str.includes('a') && !str.includes('b') && !str.includes('c')) {
        return null;
    }
    let newStr = str.replace(/[abc]/g, ' ');
    return newStr;
}
console.log(removeABC("abcdef"));
console.log(removeABC("Hello World"));
console.log(removeABC("apple")); 