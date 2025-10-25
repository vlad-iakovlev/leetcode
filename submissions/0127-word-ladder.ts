function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    const n = wordList.length
    const m = beginWord.length

    wordList.push(beginWord)

    function isNear(a: string, b: string) {
        let result = false
        for (let i = 0; i < m; i++) {
            if (a[i] !== b[i]) {
                if (result) return false
                result = true
            }
        }
        return result
    }

    const deq: number[] = [n]
    const used = Array<boolean>(n + 1).fill(false)
    const dp = Array<number>(n + 1)
    used[n] = true
    dp[n] = 1

    while (deq.length) {
        const i = deq.shift()
        if (wordList[i] === endWord) return dp[i]

        for (let j = 0; j < n; j++) {
            if (!used[j] && isNear(wordList[i], wordList[j])) {
                used[j] = true
                deq.push(j)
                dp[j] = dp[i] + 1
            }
        }
    }

    return 0
}
