function shortestPathBinaryMatrix(grid: number[][]): number {
    const n = grid.length
    if (grid[0][0] || grid[n - 1][n - 1]) return -1

    const deq = Array<[number, number, number]>([0, 0, 1])
    grid[0][0] = 1

    while (deq.length) {
        const [i, j, d] = deq.shift()
        if (i === n - 1 && j === n - 1) return d

        for (let x = i - 1; x <= i + 1; x++)
        for (let y = j - 1; y <= j + 1; y++) {
            if (
                x === i && y === j ||
                x < 0 ||
                x > n - 1 ||
                y < 0 ||
                y > n - 1 ||
                grid[x][y]
            ) continue

            grid[x][y] = 1
            deq.push([x, y, d + 1])
        }
    }

    return -1
}
