function minPathSum(grid: number[][]): number {
    const m = grid.length
    const n = grid[0].length
    const dp = Array(n)

    for (let j = 0; j < n; j++) {
        dp[j] = (dp[j - 1] ?? 0) + grid[0][j]
    }

    for (let i = 1; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (j > 0 && dp[j - 1] < dp[j]) dp[j] = dp[j - 1]
            dp[j] += grid[i][j]
        }
    }

    return dp[n - 1]
}
