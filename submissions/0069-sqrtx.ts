function mySqrt(x: number): number {
    if (!x) return 0
    let l = 1
    let r = x

    while (l < r) {
        let m = Math.floor((l + l + r) / 3)
        if (m <= x / m && (m + 1) > x / (m + 1)) return m
        if (m > x / m) r = m
        else l = m + 1
    }

    return l
}
