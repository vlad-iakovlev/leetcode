const levels = ['IV', 'XL', 'CD', "M"]

function intToRoman(num: number): string {
    let result = ''
    let lidx = 0

    while (num) {
        let digit = num % 10
        num = Math.floor(num / 10)

        if (digit === 9) {
            result = levels[lidx][0] + levels[lidx + 1][0] + result
        } else if (digit >= 5) {
            result = levels[lidx][1] + levels[lidx][0].repeat(digit - 5) + result
        } else if (digit === 4) {
            result = levels[lidx][0] + levels[lidx][1] + result
        } else {
            result = levels[lidx][0].repeat(digit) + result
        }

        lidx++
    }

    return result
};
