function canJump(nums: number[]): boolean {
    for (let i = 0, max = 0; max < nums.length - 1; i++) {
        if (i > max) return false
        if (nums[i] + i > max) max = nums[i] + i
    }
    
    return true
}
