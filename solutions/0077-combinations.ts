function combine(n: number, k: number): number[][] {
    const result: number[][] = []
    let c = Array<number>(k).fill(0)

    for (let i = 0; i >= 0;) {
        c[i]++

        if (c[i] > n) {
            i--
        } else if (i === k - 1) {
            result.push([...c])
        } else {
            i++
            c[i] = c[i - 1]
        }
    }

    return result
}
