function summaryRanges(nums: number[]): string[] {
    const n = nums.length
    const result: string[] = []

    for (let i = 0; i < n; i++) {
        const l = nums[i]
        
        while (i < n - 1 && nums[i] + 1 === nums[i + 1]) i++
        const r = nums[i]

        if (l !== r) result.push(`${l}->${r}`)
        else result.push(String(l))
    }

    return result
}
