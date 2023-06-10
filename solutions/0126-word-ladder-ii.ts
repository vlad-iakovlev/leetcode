function findLadders(beginWord: string, endWord: string, wordList: string[]): string[][] {
    const n = beginWord.length

    function isNear(a: string, b: string) {
        let result = false
        for (let i = 0; i < n; i++) {
            if (a[i] !== b[i]) {
                if (result) return false
                result = true
            }
        }
        return result
    }

    const words = new Set(wordList)
    words.delete(beginWord)
    let deq: string[] = [beginWord]
    const levels: string[][] = []
    let reached = false

    while (!reached && deq.length) {
        levels.push([...deq])

        const newDeq: string[] = []

        while (deq.length) {
            const from = deq.shift()

            for (const word of words) {
                if (!isNear(from, word)) continue

                if (word === endWord) {
                    reached = true
                    break
                }

                newDeq.push(word)
                words.delete(word)
            }
        }

        deq = newDeq
    }

    if (!reached) return []

    const result: string[][] = [[endWord]]
    
    while (levels.length) {
        const level = levels.pop()
        const m = result.length
        for (let i = 0; i < m; i++) {
            const path = result.shift()
            const last = path[0]
            level.forEach(word => {
                if (isNear(last, word)) result.push([word, ...path])
            })
        }
    }

    return result
}
