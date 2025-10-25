function minFlips(a: number, b: number, c: number): number {
    let n = Math.max(a, b, c)
    let result = 0

    for (let i = 1; i <= n; i <<= 1) {
        if (c & i) {
            if (!(a & i) && !(b & i)) result++
        } else {
            if (a & i) result++
            if (b & i) result++
        }
    }

    return result
}
