function minDistance(w1: string, w2: string): number {
    const l1 = w1.length
    const l2 = w2.length
    const dp = Array<number>(l1 * l2)

    function calc(i1: number, i2: number) {
        if (i1 === l1) return l2 - i2
        if (i2 === l2) return l1 - i1

        const idp = i1 * l2 + i2

        dp[idp] ??= w1[i1] === w2[i2]
            ? calc(i1 + 1, i2 + 1)
            : Math.min(
                calc(i1 + 1, i2 + 1) + 1,
                calc(i1 + 1, i2) + 1,
                calc(i1, i2 + 1) + 1,
            )

        return dp[idp]
    }

    return calc(0, 0)
}
