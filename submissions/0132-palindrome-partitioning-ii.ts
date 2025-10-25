function minCut(s: string): number {
    const n = s.length
    const dp = Array<number>(n + 1)
    for (let i = 0; i <= n; i++) dp[i] = i - 1

    for (let i = 1; i < n; i++) {
        for (let j = 0; i - j >= 0 && i + j < n && s[i - j] === s[i + j]; j++) {
            dp[i + j + 1] = Math.min(dp[i + j + 1], dp[i - j] + 1)
        }

        for (let j = 0; i - j - 1 >= 0 && i + j < n && s[i - j - 1] === s[i + j]; j++) {
            dp[i + j + 1] = Math.min(dp[i + j + 1], dp[i - j - 1] + 1)
        }
    }

    return dp[n]
}
