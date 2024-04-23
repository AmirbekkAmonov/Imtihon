function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            break;
        }
        sum += arr[i];
    }
    return sum;
}
console.log(calculateSum([1, 2, 3, 4, 5]));
console.log(calculateSum([1, 1, 1, 0, 1]));
