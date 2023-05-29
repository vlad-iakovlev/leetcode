function search(nums: number[], target: number): boolean {
    let l = 0
    let r = nums.length - 1

    while (l <= r) {
        let m = Math.floor((l + r) / 2)
        if (nums[m] === target) return true

        if (nums[l] === nums[m]) {
            l++
        } else if (nums[l] <= nums[m]) {
            if (nums[l] <= target && nums[m] >= target) r = m - 1
            else l = m + 1
        } else {
            if (nums[r] >= target && nums[m] <= target) l = m + 1
            else r = m - 1
        }
    }

    return false
}
