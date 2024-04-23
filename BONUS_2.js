function doubleFactorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * doubleFactorial(num - 2);
    }
}
console.log(doubleFactorial(9)); 
console.log(doubleFactorial(7)); 
console.log(doubleFactorial(5)); 
console.log(doubleFactorial(3)); 
console.log(doubleFactorial(1)); 