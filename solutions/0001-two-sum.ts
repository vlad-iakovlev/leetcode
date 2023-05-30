function twoSum(nums: number[], target: number): number[] {
    const numsObj: Record<number, number | undefined> = {}

    for (let i = 0; i < nums.length; i++) {
        const j = numsObj[target - nums[i]]
        if (j != null) return [i, j]
        numsObj[nums[i]] = i
    }
}
