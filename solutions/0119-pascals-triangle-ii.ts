function getRow(n: number): number[] {
    const result = Array<number>(n + 1)
    result[0] = 1

    for (let i = 1; i <= n; i++) {
        result[i] = result[i - 1] * (n + 1 - i) / i
    }

    return result
}
