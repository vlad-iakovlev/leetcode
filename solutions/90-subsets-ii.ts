function subsetsWithDup(nums: number[]): number[][] {
    nums.sort((a, b) => a - b)

    const result = [[]]
    let l = 0

    for (let i = 0; i < nums.length; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) l = 0

        for (let r = result.length; l < r; l++) {
            result.push([...result[l], nums[i]])
        }
    }

    return result
}
