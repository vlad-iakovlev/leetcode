function isMatch(s: string, p: string): boolean {
    const n = s.length + 1
    const m = p.length + 1

    const dp = Array<boolean>(n * m)
    dp[0] = true

    for (let i = 0; i < n; i++) {
        for (let j = 1; j < m; j++) {
            dp[i * m + j] =
                p[j - 1] === '*' ? (
                    dp[i * m + j - 2] ||
                    (
                        i > 0 &&
                        (p[j - 2] === '.' || s[i - 1] === p[j - 2]) &&
                        dp[(i - 1) * m + j]
                    )
                ) : (
                    i > 0 &&
                    dp[(i - 1) * m + j - 1] &&
                    (p[j - 1] === '.' || s[i - 1] === p[j - 1])
                )
        }
    }

    return dp[n * m - 1] ?? false
}
