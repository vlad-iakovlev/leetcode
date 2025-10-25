function spiralOrder(matrix: number[][]): number[] {
    const n = matrix.length
    const m = matrix[0].length

    const result: number[] = []

    let t = 0
    let b = n - 1
    let l = 0
    let r = m - 1

    while (result.length < n * m) {
        for (let i = l; i <= r; i++) result.push(matrix[t][i])
        t++

        for (let i = t; i <= b; i++) result.push(matrix[i][r])
        r--

        if (t <= b) {
            for (let i = r; i >= l; i--) result.push(matrix[b][i])
            b--
        }

        if (l <= r) {
            for (let i = b; i >= t; i--) result.push(matrix[i][l])
            l++
        }
    }

    return result
}
