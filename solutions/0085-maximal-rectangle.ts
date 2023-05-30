function maximalRectangle(matrix: string[][]): number {
    const m = matrix.length
    const n = matrix[0].length
    const dp = Array<number>(n).fill(0)
    const lb = Array<number>(n)
    const rb = Array<number>(n)
    let max = 0

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === '0') dp[j] = 0
            else dp[j]++
        }

        lb[0] = -1
        rb[n - 1] = n

        for (let j = 1; j < n; j++) {
            let p = j - 1
            while (p >= 0 && dp[p] >= dp[j]) p = lb[p]
            lb[j] = p
        }

        for (let j = n - 2; j >= 0; j--) {
            let p = j + 1
            while (p < n && dp[p] >= dp[j]) p = rb[p]
            rb[j] = p
        }

        for (let j = 0; j < n; j++) {
            const area = dp[j] * (rb[j] - lb[j] - 1)
            if (area > max) max = area
        }
    }

    return max
}
