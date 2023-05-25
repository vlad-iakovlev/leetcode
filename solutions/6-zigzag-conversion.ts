function convert(s: string, numRows: number): string {
    if (numRows === 1) return s

    const period = (numRows - 1) * 2
    let result: string[] = new Array(numRows).fill('')

    for (let i = 0; i < s.length; i++) {
        let row = (i % period) 
        if (row >= numRows) row = period - row
        result[row] += s[i]
    }

    return result.join('')
}
