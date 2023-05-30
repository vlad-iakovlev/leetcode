function numDecodings(s: string): number {
    const n = s.length
    const dp = Array<number>(n + 1)
    dp[n] = 1

    for (let i = n - 1; i >= 0; i--) {
        if (s[i] === '0') {
            dp[i] = 0
        } else {
            dp[i] = dp[i + 1]
            if (Number(s[i] + s[i + 1]) <= 26) dp[i] += dp[i + 2]
        }
    }

    return dp[0]
}
