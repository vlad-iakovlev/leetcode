function lengthOfLastWord(s: string): number {
    let i = s.length - 1
    for (; s[i] === ' '; i--) {}

    let count = 0
    for (; s[i] && s[i] !== ' '; i--) count++

    return count
}
