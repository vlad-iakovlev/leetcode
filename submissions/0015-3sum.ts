function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b)

    const result: number[][] = []

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) break

        let j = i + 1
        let k = nums.length - 1

        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k]

            if (sum === 0) {
                result.push([nums[i], nums[j], nums[k]])
            }

            if (sum >= 0) {
                while (nums[k] === nums[k - 1]) k--
                k--
            }

            if (sum <= 0) {
                while (nums[j] === nums[j + 1]) j++
                j++
            }
        }

        while (nums[i] === nums[i + 1]) i++
    }

    return result
}
