function factorize(number) {
    if (number <= 0) {
        return [];
    }
    const factors = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}
console.log(factorize(12));
console.log(factorize(4));
console.log(factorize(15));
console.log(factorize(17)); 