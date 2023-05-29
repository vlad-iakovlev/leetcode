function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length
    const dp = Array<number>(n).fill(0)
    
    if (!obstacleGrid[0][0]) dp[0] = 1

    for (let i = 0; i < m; i++) {
        if (obstacleGrid[i][0]) dp[0] = 0

        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j]) dp[j] = 0
            else dp[j] += dp[j - 1]
        }
    }

    return dp[n - 1]
}
