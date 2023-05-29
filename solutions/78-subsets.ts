function subsets(nums: number[]): number[][] {
    const n = 1 << nums.length
    const result = Array<number[]>(n)
    
    for (let i = 0; i < n; i++) {
        const item: number[] = []

        for (let j = 0; j < nums.length; j++) {
            if (i & (1 << j)) item.push(nums[j])
        }

        result[i] = item
    }

    return result
}
