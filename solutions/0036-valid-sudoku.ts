function isValidSudoku(board: string[][]): boolean {
    let rows: number[] = []
    let cols: number[] = []
    let boxes: number[] = []

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === '.') continue

            const value = 1 << Number(board[row][col])

            if (rows[row] & value) return false
            rows[row] |= value

            if (cols[col] & value) return false
            cols[col] |= value

            const box = Math.floor(row / 3) * 3 + Math.floor(col / 3)
            if (boxes[box] & value) return false
            boxes[box] |= value
        }
    }

    return true
}
