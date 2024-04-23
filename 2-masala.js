function teskarisigaAylantir(matn) {
    if (typeof matn === 'string') {
        let sozlar = matn.split(' ');
        let natija = '';

        for (let i = sozlar.length - 1; i >= 0; i--) {
            natija += sozlar[i] + ' ';
        }
        return natija.trim();
    } else if (typeof matn === 'number') {
        let raqamString = matn.toString();
        let natija = '';
        for (var i = raqamString.length - 1; i >= 0; i--) {
            natija += raqamString[i];
        }
        return parseInt(natija);
    } else {
        return "Notog`ri kirish malu'moti! Faqat matn yoki raqam kiriting.";
    }
}

let matn = 'Hello world';
let matnNatija = teskarisigaAylantir(matn);
console.log(matnNatija);
let raqam = 12345;
let raqamNatija = teskarisigaAylantir(raqam);
console.log(raqamNatija);
let gap = "How are you?";
let gapNatija = teskarisigaAylantir(gap);
console.log(gapNatija);
console.log(teskarisigaAylantir(true));