function isMatch(s: string, p: string): boolean {
    const n = s.length
    const m = p.length

    const dp = Array<boolean>((n + 1) * (m + 1))
    const k = (i: number, j: number) => i * (m + 1) + j
    dp[k(0, 0)] = true

    for (let i = 0; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            dp[k(i, j)] =
                p[j - 1] === '*' ? (
                    dp[k(i, j - 2)] ||
                    (
                        i > 0 &&
                        (p[j - 2] === '.' || s[i - 1] === p[j - 2]) &&
                        dp[k(i - 1, j)]
                    )
                ) : (
                    i > 0 &&
                    dp[k(i - 1, j - 1)] &&
                    (p[j - 1] === '.' || s[i - 1] === p[j - 1])
                )
        }
    }

    return dp[k(n, m)] ?? false
}
