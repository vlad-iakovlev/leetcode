/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
    const m = board.length
    const n = board[0].length

    function dfs(i: number, j: number) {
        if (board[i]?.[j] !== 'O') return
        board[i][j] = 'o'
        dfs(i - 1, j)
        dfs(i + 1, j)
        dfs(i, j - 1)
        dfs(i, j + 1)
    }

    for (let i = 0; i < m; i++) {
        if (board[i][0] === 'O') dfs(i, 0)
        if (board[i][n - 1] === 'O') dfs(i, n - 1)
    }

    for (let j = 0; j < n; j++) {
        if (board[0][j] === 'O') dfs(0, j)
        if (board[m - 1][j] === 'O') dfs(m - 1, j)
    }

    for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++) {
        if (board[i][j] === 'O') board[i][j] = 'X'
        else if (board[i][j] === 'o') board[i][j] = 'O'
    }
}
