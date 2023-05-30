function grayCode(n: number): number[] {
    const m = 1 << n
    const result = Array<number>(m)
    for (let i = 0; i < m; i++) result[i] = i ^ (i >> 1)
    return result
}
