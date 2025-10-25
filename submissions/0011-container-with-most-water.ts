function maxArea(height: number[]): number {
    let result = 0

    let i = 0
    let j = height.length - 1

    while (i < j) {
        const amount = (j - i) * Math.min(height[i], height[j])
        if (amount > result) result = amount

        if (height[i] < height[j]) i++
        else j--
    }

    return result
}
