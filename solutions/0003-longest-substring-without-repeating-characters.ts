function lengthOfLongestSubstring(s: string): number {
    let maxLen = 0

    let i = 0
    let j = 0

    while (i < s.length, j < s.length) {
        const substr = s.slice(i, j)

        if (substr.includes(s[j])) {
            i++
        } else {
            if (maxLen < substr.length + 1) {
                maxLen = substr.length + 1
            }

            j++
        }
    }

    return maxLen
}
