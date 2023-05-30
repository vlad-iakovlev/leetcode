function subsets(nums: number[]): number[][] {
    const n = 1 << nums.length
    const result = Array<number[]>(n)
    
    for (let i = 0; i < n; i++) {
        result[i] = nums.filter((_, j) => i & (1 << j))
    }

    return result
}
