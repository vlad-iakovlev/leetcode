function trap(height: number[]): number {
    let l = 0
    let r = height.length - 1
    let ll = l
    let rr = r
    let result = 0

    while (l < r) {
        if (height[l] < height[ll]) {
            result += height[ll] - height[l]
            l++
        } else if (height[r] < height[rr]) {
            result += height[rr] - height[r]
            r--
        } else {
            if (height[l] > height[ll]) ll = l
            if (height[r] > height[rr]) rr = r

            if (height[ll] > height[rr]) r--; else l++
        }
    }

    return result
}
