function numDistinct(s: string, t: string): number {
    const n = s.length
    const m = t.length

    const dp: number[][] = Array(m + 1)
    dp[0] = Array(n + 1).fill(1)

    for (let i = 0; i < m; i++) {
        dp[i + 1] = Array(n + 1)
        dp[i + 1][0] = 0

        for (let j = 0; j < n; j++) {
            if (t[i] === s[j]) {
                dp[i + 1][j + 1] = dp[i + 1][j] + dp[i][j]
            } else {
                dp[i + 1][j + 1] = dp[i + 1][j]
            }
        }
    }

    return dp[m][n]
}
