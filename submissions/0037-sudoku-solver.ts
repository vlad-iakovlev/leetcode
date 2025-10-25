const MASK = 0b1111111110

function solveSudoku(board: string[][]): void {
    let rows: number[] = []
    let cols: number[] = []
    let boxes: number[] = []

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === '.') continue
            const box = getBox(row, col)
            const value = 1 << Number(board[row][col])
            rows[row] |= value
            cols[col] |= value
            boxes[box] |= value
        }
    }

    function solve(i: number) {
        if (i >= 81) return true

        const row = Math.floor(i / 9)
        const col = i % 9
        if (board[row][col] !== '.') return solve(i + 1)

        const box = getBox(row, col)
        const available = ~rows[row] & ~cols[col] & ~boxes[box] & MASK

        for (let j = 1; j <= 9; j++) {
            const value = 1 << j
            if (!(available & value)) continue

            board[row][col] = String(j)
            rows[row] |= value
            cols[col] |= value
            boxes[box] |= value

            if (solve(i + 1)) return true

            board[row][col] = '.'
            rows[row] &= ~value
            cols[col] &= ~value
            boxes[box] &= ~value
        }

        return false
    }

    solve(0)
}

function getBox(row: number, col: number) {
    return Math.floor(row / 3) * 3 + Math.floor(col / 3)
}
