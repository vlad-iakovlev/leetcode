function permuteUnique(nums: number[]): number[][] {
    const map = nums.reduce<number[]>((map, num) => {
        map[num + 10]++
        return map
    }, Array(21).fill(0))

    const result: number[][] = []

    function bt(p: number[]) {
        if (p.length === nums.length) {
            result.push(p)
            return
        }

        for (let i = 0; i <= 20; i++) {
            if (map[i]) {
                map[i]--
                bt([...p, i - 10])
                map[i]++
            }
        }
    }

    bt([])

    return result
}
