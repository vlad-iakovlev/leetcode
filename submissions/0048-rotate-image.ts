function rotate(matrix: number[][]): void {
    const n = matrix.length

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            const val = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = val
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n / 2; j++) {
            const val = matrix[i][j]
            matrix[i][j] = matrix[i][n - 1 - j]
            matrix[i][n - 1 - j] = val
        }
    }
}
