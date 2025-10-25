function jump(nums: number[]): number {
    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i] + i, nums[i - 1])
    }

    let result = 0

    for (let i = 0; i < nums.length - 1;) {
        result++
        i = nums[i]
    }

    return result
}
