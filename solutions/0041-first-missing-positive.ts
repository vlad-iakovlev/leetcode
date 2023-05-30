function firstMissingPositive(nums: number[]): number {
    const n = nums.length
    const acc = new Array<boolean>(n)

    for (let i = 0; i < n; i++) {
        if (nums[i] > 0 && nums[i] <= n) acc[nums[i] - 1] = true
    }
    
    for (let i = 0; i < n; i++) {
        if (!acc[i]) return i + 1
    }
    
    return n + 1
}
