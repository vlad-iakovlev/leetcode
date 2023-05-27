function search(nums: number[], target: number): number {
    const s = nums[0]
    const e = nums[nums.length - 1]

    let min = -1e5
    let max = 1e5
    if (s > e && target >= s) min = s
    if (s > e && target <= e) max = e

    let l = 0
    let r = nums.length - 1

    while (l < r - 1) {
        let m = Math.floor((l + r) / 2)
        if (nums[m] === target) return m

        if (nums[m] < min) r = m - 1
        else if (nums[m] > max) l = m + 1
        else if (nums[m] > target) r = m - 1
        else l = m + 1
    }

    if (nums[l] === target) return l
    if (nums[r] === target) return r

    return -1
}
