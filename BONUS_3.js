function identityMatrix(size) {
    if (size <= 0) {
        return [];
    }
    const matrix = [];
    for (let i = 0; i < size; i++) {
        const row = [];
        for (let j = 0; j < size; j++) {
            if (i === j) {
                row.push(1);
            } else {
                row.push(0);
            }
        }
        matrix.push(row);
    }
    return matrix;
}
console.log(identityMatrix(-10));
console.log(identityMatrix(1));
console.log(identityMatrix(5));

