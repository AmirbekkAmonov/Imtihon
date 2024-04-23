function odamSoni(arr) {
    let jamiOdam = 0;
    for (let i = 0; i < arr.length; i++) {
        const bekat = arr[i];
        const chiqqanOdam = bekat[0];
        const tushganOdam = bekat[1];

        jamiOdam += chiqqanOdam - tushganOdam;
    }
    if (jamiOdam <= 0) {
        return `Odamlar soni manfiy bo'ldi=> ${jamiOdam}`
    }
    return jamiOdam;
}

console.log(odamSoni([
    [10, 0],
    [3, 5],
    [5, 8]
]));
console.log(odamSoni([
    [3, 0],
    [9, 1],
    [4, 8],
    [12, 2],
    [6, 1],
    [7, 8]
])); 
