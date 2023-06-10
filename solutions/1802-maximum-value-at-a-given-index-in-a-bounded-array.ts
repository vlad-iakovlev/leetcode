function maxValue(n: number, index: number, maxSum: number): number {
    const lc = index
    const rc = n - index - 1

    let l = 0
    let r = maxSum

    while (l < r) {
        const m = Math.floor((l + r + 1) / 2)
        const ls = m > lc ? (m + m - lc) * (lc + 1) / 2 : (m - 1) * m / 2 + lc + 1
        const rs = m > rc ? (m + m - rc) * (rc + 1) / 2 : (m - 1) * m / 2 + rc + 1
        if (ls + rs - m <= maxSum) l = m
        else r = m - 1
    }

    return l
}
