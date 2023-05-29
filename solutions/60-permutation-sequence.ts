function getPermutation(n: number, k: number): string {
    const nums = Array<number>(n)
    for (let i = 0; i < n; i++) nums[i] = i + 1

    let f = 1
    for (let i = 1; i < n; i++) f *= i

    let result = ''
    k--

    while (--n) {
        const idx = Math.floor(k / f)
        result += nums.splice(idx, 1)[0]

        k %= f
        f /= n
    }

    result += nums[0]

    return result
}
