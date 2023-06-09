function longestConsecutive(nums: number[]): number {
    const set = new Set(nums)

    let result = 0;

    set.forEach(num => {
        if (set.has(num - 1)) return

        let i = 1
        for (; set.has(num + i); i++) {}

        if (i > result) result = i
    })

    return result
}
