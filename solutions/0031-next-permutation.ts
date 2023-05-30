/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    let i = nums.length - 2
    for (; i >= 0 && nums[i] >= nums[i + 1]; i--) {}

    if (i >= 0) {
        let j = i
        for (; j < nums.length - 1 && nums[j + 1] > nums[i]; j++) {}
        const val = nums[i]
        nums[i] = nums[j]
        nums[j] = val
    }

    i++
    for (let j = nums.length - 1; i < j; i++, j--) {
        const val = nums[i]
        nums[i] = nums[j]
        nums[j] = val
    }
}
