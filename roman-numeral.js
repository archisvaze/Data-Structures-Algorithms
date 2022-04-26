// Create a RomanNumerals class that can convert a roman numeral to and from an integer value. 

let RomanNumerals = {
    toRoman(n) {
        let num = n;
        let romanObj = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }
        let roman = "";
        for (let i in romanObj) {
            while (num >= romanObj[i]) {
                roman += i;
                num -= romanObj[i]
            }
        }
        return roman;
    },
    fromRoman(n) {
        let romanObj = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }
        let arr = n.split("");
        let romanNumber = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 'C' && arr[i + 1] === 'M') {
                romanNumber.push(arr[i] + arr[i + 1]);
                i++;
            }
            else if (arr[i] === 'C' && arr[i + 1] === 'D') {
                romanNumber.push(arr[i] + arr[i + 1]);
                i++;
            }
            else if (arr[i] === 'X' && arr[i + 1] === 'C') {
                romanNumber.push(arr[i] + arr[i + 1]);
                i++;
            }
            else if (arr[i] === 'X' && arr[i + 1] === 'L') {
                romanNumber.push(arr[i] + arr[i + 1]);
                i++;
            }
            else if (arr[i] === 'I' && arr[i + 1] === 'X') {
                romanNumber.push(arr[i] + arr[i + 1]);
                i++;
            }
            else if (arr[i] === 'I' && arr[i + 1] === 'V') {
                romanNumber.push(arr[i] + arr[i + 1]);
                i++;
            }
            else romanNumber.push(arr[i]);
        }
        let number = 0;
        for (let i = 0; i < romanNumber.length; i++) {
            number += (romanObj[romanNumber[i]])
        }
        return number;
    }
}

console.log(RomanNumerals.fromRoman("X"))