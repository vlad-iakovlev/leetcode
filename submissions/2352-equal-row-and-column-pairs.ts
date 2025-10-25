function equalPairs(grid: number[][]): number {
    const n = grid.length

    const map: Record<string, number> = {}
    for (let i = 0; i < n; i++) {
        const row = grid[i].join(',')
        map[row] = (map[row] ?? 0) + 1
    }

    let result = 0
    for (let i = 0; i < n; i++) {
        const col = grid.map(row => row[i]).join(',')
        result += map[col] ?? 0
    }

    return result
}
