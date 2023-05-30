function largestRectangleArea(height: number[]): number {
    const n = height.length
    const lb = Array<number>(n)
    const rb = Array<number>(n)
    lb[0] = -1
    rb[n - 1] = n

    for (let i = 1; i < n; i++) {
        let p = i - 1
        while (p >= 0 && height[p] >= height[i]) p = lb[p]
        lb[i] = p
    }

    for (let i = n - 2; i >= 0; i--) {
        let p = i + 1
        while (p < n && height[p] >= height[i]) p = rb[p]
        rb[i] = p
    }

    console.log(lb, rb)

    let max = 0
    for (let i = 0; i < n; i++) {
        const area = height[i] * (rb[i] - lb[i] - 1)
        if (area > max) max = area
    }

    return max
}
