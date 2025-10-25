function wordBreak(s: string, wordDict: string[]): boolean {
    const words = new Set(wordDict)
    const n = s.length
    const dp = Array<boolean>(n + 1).fill(false)
    dp[n] = true

    for (let i = n - 1; i >= 0; i--) {
        for (let j = 1; j <= 20 && i + j <= n; j++) {
            if (dp[i + j] && words.has(s.slice(i, i + j))) dp[i] = true
        }
    }

    return dp[0]
}
