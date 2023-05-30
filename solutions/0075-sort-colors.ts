function sortColors(nums: number[]): void {
    let l = 0
    let r = nums.length - 1

    for (let i = 0; i <= r; i++) {
        while (nums[i] === 2 && i < r) {
            const val = nums[i]
            nums[i] = nums[r]
            nums[r] = val
            r--
        }

        while (nums[i] === 0 && i > l) {
            const val = nums[i]
            nums[i] = nums[l]
            nums[l] = val
            l++
        }
    }
}
