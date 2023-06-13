function equalPairs(grid: number[][]): number {
    const n = grid.length
    let result = 0
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let match = true
            for (let k = 0; match && k < n; k++) {
                match = grid[i][k] === grid[k][j]
            }

            if (match) result++
        }
    }

    return result
}
