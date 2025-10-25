function countNegatives(grid: number[][]): number {
    const n = grid[0].length

    let result = 0
    let j = n - 1

    grid.forEach(row => {
        while (j >= 0 && row[j] < 0) j--
        result += n - j - 1
    })

    return result
}
