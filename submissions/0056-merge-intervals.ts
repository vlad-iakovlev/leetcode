function merge(intervals: number[][]): number[][] {
    /* Stores info about nums covered by intevals
     * 0b01 - Can use this number as lower bound
     * 0b10 - Can use this number as upper dound
     * 0b11 - Both cases are possible
     *
     * [[0, 0], [1, 3]]
     * 0: 0b01
     * 1: 0b01
     * 2: 0b11
     * 3: 0b10
     */
    const nums = Array<number>(1e4 + 1)
    let min = 1e5
    let max = 0

    intervals.forEach(int => {
        if (int[0] < min) min = int[0]
        if (int[1] > max) max = int[1]

        for (let i = int[0]; i <= int[1]; i++) {
            if (i === int[0]) nums[i] |= 1
            else if (i === int[1]) nums[i] |= 2
            else nums[i] |= 3
        }
    })

    const result: number[][] = [[min, min]]

    for (let i = min + 1; i <= max; i++) {
        if (!nums[i]) continue

        if (nums[i] & 2 && nums[i - 1] & 1) result.at(-1)[1] = i
        else result.push([i, i])
    }

    return result
}
