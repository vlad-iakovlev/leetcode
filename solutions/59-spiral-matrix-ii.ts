function generateMatrix(n: number): number[][] {
    const matrix: number[][] = Array(n)
    for (let i = 0; i < n; i++) matrix[i] = Array(n)
    
    let val = 0
    
    for (let l = 0, r = n - 1; val < n * n; l++, r--) {
        if (l === r) {
            matrix[l][l] = val + 1
            break
        }
        
        for (let i = l; i < r; i++) matrix[l][i] = ++val
        for (let i = l; i < r; i++) matrix[i][r] = ++val
        for (let i = r; i > l; i--) matrix[r][i] = ++val
        for (let i = r; i > l; i--) matrix[i][l] = ++val
    }
    
    return matrix
}
