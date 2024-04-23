
function isAnagram(word1, word2) {
    const normalize = (str) => {
        return str.replace(/[^\w]/g, '').toLowerCase();
    };
    const normalizedWord1 = normalize(word1);
    const normalizedWord2 = normalize(word2);
    if (normalizedWord1.length !== normalizedWord2.length) {
        return false;
    }
    const charCount = {};
    for (let char of normalizedWord1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of normalizedWord2) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }
    return true;
}
console.log(isAnagram("tuk", "kut"));
console.log(isAnagram("olma", "mola"));
console.log(isAnagram("Hello", "world"));
console.log(isAnagram("Dormitory", "Dirty room")); 
