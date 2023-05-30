function isInterleave(s1: string, s2: string, s3: string): boolean {
    const n = s1.length
    const m = s2.length
    
    if (n + m !== s3.length) return false

    const dp = Array<boolean>(m + 1)

    for (let i = 0; i <= n; i++)
    for (let j = 0; j <= m; j++) {
        dp[j] = (
            i === 0 && j === 0 ||
            dp[j] && s1[i - 1] === s3[i + j - 1] ||
            dp[j - 1] && s2[j - 1] === s3[i + j - 1]
        )
    }

    return dp[m] ?? false
}
