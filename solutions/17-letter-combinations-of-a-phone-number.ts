const digitsToLetters = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
}

function letterCombinations(digits: string): string[] {
    if (!digits) return [];

    const result = ['']

    for (let i = 0; i < digits.length; i++) {
        const letters = digitsToLetters[digits[i]]
        for (let j = 0; j < result.length; j += letters.length) {
            result.splice(j, 1, ...letters.map(letter => result[j] + letter))
        }
    }

    return result
}
