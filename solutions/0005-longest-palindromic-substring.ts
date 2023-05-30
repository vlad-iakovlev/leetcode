function longestPalindrome(s: string): string {
    const r = s.split('').reverse().join('')
    let result = ''

    for (let i = 0; i < s.length; i++) {
        for (let j = i + result.length + 1; j < s.length + 1; j++) {
            const subS = s.slice(i, j)
            const subR = r.slice(s.length - j, s.length - i)
            
            if (subS === subR) {
                result = subS
            }
        }
    }

    return result
}
