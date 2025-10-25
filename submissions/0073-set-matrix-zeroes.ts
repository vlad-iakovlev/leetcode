function setZeroes(matrix: number[][]): void {
    const rows = matrix.length
    const cols = matrix[0].length

    const zeroRows = new Set<number>()
    const zeroCols = new Set<number>()

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (matrix[row][col] === 0) {
                zeroRows.add(row)
                zeroCols.add(col)
            }
        }
    }

    zeroRows.forEach(row => {
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = 0
        }
    })

    zeroCols.forEach(col => {
        for (let row = 0; row < rows; row++) {
            matrix[row][col] = 0
        }
    })
}
