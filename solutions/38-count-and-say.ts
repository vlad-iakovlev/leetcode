const cache: Record<number, string> = { 1: '1'} 

function countAndSay(n: number): string {
    if (cache[n]) return cache[n]

    const s = countAndSay(n - 1)

    let result = ''

    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        let count = 1

        while (s[i + 1] === char) {
            count++
            i++
        }

        result += count + char
    }

    cache[n] = result

    return result
};
