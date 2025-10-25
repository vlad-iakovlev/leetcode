function singleNumber(nums: number[]): number {
    let a = 0
    let b = 0

    nums.forEach(num => {
        a ^= num
        a &= ~b

        b ^= num
        b &= ~a
    })

    return a
}
