function searchRange(nums: number[], target: number): number[] {
    return [bs1(nums, target), bs2(nums, target)]
}

function bs1(nums: number[], target: number): number {
    let i = -1
    let l = 0
    let r = nums.length - 1

    while (l <= r) {
        const m = Math.floor((l + r) / 2)
        if (nums[m] === target) {
            i = m
            r = m - 1
        } else if (nums[m] < target) {
            l = m + 1
        } else {
            r = m - 1
        }
    }

    return i
}

function bs2(nums: number[], target: number): number {
    let i = -1
    let l = 0
    let r = nums.length - 1

    while (l <= r) {
        const m = Math.floor((l + r) / 2)
        if (nums[m] === target) {
            i = m
            l = m + 1
        } else if (nums[m] < target) {
            l = m + 1
        } else {
            r = m - 1
        }
    }

    return i
}
