function wordBreak(s: string, wordDict: string[]): string[] {
    const words = new Set(wordDict)
    const n = s.length
    const dp = Array<string[]>(n + 1)
    dp[n] = ['']

    for (let i = n - 1; i >= 0; i--) {
        dp[i] = []
        for (let j = 1; j <= 20 && i + j <= n; j++) {
            const word = s.slice(i, i + j)

            if (words.has(word)) {
                dp[i].push(...dp[i + j].map(prev => `${word} ${prev}`.trim()))
            }
        }
    }

    return dp[0]
}
