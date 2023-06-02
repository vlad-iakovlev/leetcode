function minimumTotal(triangle: number[][]): number {
    const n = triangle.length
    const dp = [...triangle[n - 1]]

    for (let i = n - 2; i >= 0; i--)
    for (let j = 0; j <= i; j++) {
        dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j]
    }

    return dp[0]
}
