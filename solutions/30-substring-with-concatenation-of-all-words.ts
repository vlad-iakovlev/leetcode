function findSubstring(s: string, words: string[]): number[] {
    const wlen = words[0].length
    const clen = wlen * words.length

    const wmap = words.reduce<Record<string, number>>((acc, word) => {
        acc[word] = (acc[word] ?? 0) + 1
        return acc
    }, {})

    const result: number[] = []

    for (let i = 0; i < wlen; i++) {
        for (let j = i; j <= s.length - clen; j+= wlen) {
            const lwmap = {...wmap}
            let found = true

            for (let k = j; k < j + clen; k += wlen) {
                const word = s.slice(k, k + wlen)
                
                if (!lwmap[word]) {
                    found = false
                    break
                }

                lwmap[word]--
            }

            if (found) result.push(j)
        }
    }

    return result
}
