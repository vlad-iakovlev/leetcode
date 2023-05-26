function removeDuplicates(nums: number[]): number {
    let i = 0
    let len = 0
    while (i < nums.length) {
        const val = nums[i]
        nums[len++] = val
        while (nums[++i] === val);
    }
    return len
}
