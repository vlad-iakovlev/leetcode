function fourSum(nums: number[], target: number): number[][] {
    nums.sort((a, b) => a - b)

    const result: number[][] = []

    for (let l = 0; l < nums.length - 3; l++) {
        for (let i = l + 1; i < nums.length - 2; i++) {
            let j = i + 1
            let k = nums.length - 1

            while (j < k) {
                const sum = nums[l] + nums[i] + nums[j] + nums[k]

                if (sum === target) {
                    result.push([nums[l], nums[i], nums[j], nums[k]])
                }

                if (sum >= target) {
                    while (nums[k] === nums[k - 1]) k--
                    k--
                }

                if (sum <= target) {
                    while (nums[j] === nums[j + 1]) j++
                    j++
                }
            }

            while (nums[i] === nums[i + 1]) i++
        }

        while (nums[l] === nums[l + 1]) l++
    }

    return result
}
