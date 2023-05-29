function exist(board: string[][], word: string): boolean {
    const m = board.length
    const n = board[0].length

    function find(i: number, j: number, si: number): boolean {
        if (si === word.length) return true

        if (board[i]?.[j] === word[si]) {
            board[i][j] = ''

            if (
                find(i - 1, j    , si + 1) ||
                find(i + 1, j    , si + 1) ||
                find(i    , j - 1, si + 1) ||
                find(i    , j + 1, si + 1)
            ) return true

            board[i][j] = word[si]
        }

        return false
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (find(i, j, 0)) return true
        }
    }

    return false
}
