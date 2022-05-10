function VigenèreCipher(key, abc) {
    let abcIndex = {};
    let keyIndex = {};
    for (let i = 0; i < abc.length; i++) {
        abcIndex[abc[i]] = i;
    }
    this.encode = function (str) {
        let output = ""
        while (key.length < str.length) {
            key += key;
        }
        for (let i = 0; i < str.length; i++) {
            if (abc.includes(str[i])) {
                let cipherIndex = abcIndex[str[i]] + abcIndex[key[i]];
                if (cipherIndex >= abc.length) cipherIndex -= (abc.length);
                output += Object.keys(abcIndex)[cipherIndex];
            }
            else {
                output += str[i]
            }
        }
        return output;
    };
    this.decode = function (str) {
        let output = ""
        while (key.length < str.length) {
            key += key;
        }
        for (let i = 0; i < str.length; i++) {
            if (abc.includes(str[i])) {
                let decipheredIndex = abcIndex[str[i]] - abcIndex[key[i]];
                if (decipheredIndex < 0) decipheredIndex += (abc.length) ;
                output += Object.keys(abcIndex)[decipheredIndex];
            }
            else {
                output += str[i]
            }
        }
        return output;
    };
}

var abc, key;
abc = "abcdefghijklmnopqrstuvwxyz";
key = "password"
c = new VigenèreCipher(key, abc);
console.log(c.decode("weq svrwh ygebx dn"));