function removeDuplicates(nums: number[]): number {
    let len = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[len - 2]) {
            nums[len++] = nums[i]
        }
    }

    return len
}
