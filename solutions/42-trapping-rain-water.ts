function trap(height: number[]): number {
    let l = 0
    let r = height.length - 1
    let lv = height[l]
    let rv = height[r]
    let result = 0

    while (l < r) {
        if (height[l] < lv) {
            result += lv - height[l]
            l++
            continue
        }

        if (height[r] < rv) {
            result += rv - height[r]
            r--
            continue
        }

        if (height[l] > lv) {
            lv = height[l]
        }

        if (height[r] > rv) {
            rv = height[r]
        }

        if (lv > rv) r--
        else l++
    }

    return result
}
