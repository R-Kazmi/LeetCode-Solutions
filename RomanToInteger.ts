
//Given a roman numeral, convert it to an integer

var romans: any = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}

function romanToInt(s: string): number {
    var num: number = 0
    for (let i = 0; i < s.length; i++) {
        if (romans[s[i]] === 1 && romans[s[i + 1]] === 5) {
            num = num + 4
            i++
            continue
        }
        if (romans[s[i]] === 1 && romans[s[i + 1]] === 10) {
            num = num + 9
            i++
            continue
        }
        if (romans[s[i]] === 10 && romans[s[i + 1]] === 50) {
            num = num + 40
            i++
            continue
        }
        if (romans[s[i]] === 10 && romans[s[i + 1]] === 100) {
            num = num + 90
            i++
            continue
        }
        if (romans[s[i]] === 100 && romans[s[i + 1]] === 500) {
            num = num + 400
            i++
            continue
        }
        if (romans[s[i]] === 100 && romans[s[i + 1]] === 1000) {
            num = num + 900
            i++
            continue
        }
        num = num + romans[s[i]]
    }
    return num;
};
