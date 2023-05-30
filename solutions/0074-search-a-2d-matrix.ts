function searchMatrix(matrix: number[][], target: number): boolean {
    let rows = matrix.length
    let cols = matrix[0].length

    let l = 0
    let r = rows - 1
    let row = -1
    while (l <= r) {
        let m = Math.floor((l + r) / 2)
        if (matrix[m][0] <= target && matrix[m][cols - 1] >= target) {
            row = m
            break
        } 
        
        if (target < matrix[m][0]) r = m - 1
        else l = m + 1
    }

    if (row === -1) return false

    l = 0
    r = cols - 1
    while (l <= r) {
        let m = Math.floor((l + r) / 2)
        if (matrix[row][m] === target) return true
        if (target < matrix[row][m]) r = m - 1
        else l = m + 1
    }

    return false
}
