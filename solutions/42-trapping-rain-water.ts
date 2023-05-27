function trap(height: number[]): number {
    let l = 0
    let r = height.length - 1
    let lv = height[l]
    let rv = height[r]
    let result = 0

    while (l < r) {
        const lh = height[l]
        if (lh < lv) {
            result += lv - lh
            l++
            continue
        }

        const rh = height[r]
        if (rh < rv) {
            result += rv - rh
            r--
            continue
        }

        if (lh > lv) lv = lh
        if (rh > rv) rv = rh

        if (lv > rv) r--; else l++
    }

    return result
}
