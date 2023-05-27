function permute(nums: number[]): number[][] {
    const result: number[][] = []

    function p(nums: number[], s: number) {
        if (s === nums.length - 1) result.push(nums)

        for (let i = s; i < nums.length; i++) {
            nums[nums.length - 1] = nums.splice(s, 1)[0]
            p([...nums], s + 1)
        }
    }

    p(nums, 0)

    return result
}
