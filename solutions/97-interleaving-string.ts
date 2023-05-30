function isInterleave(s1: string, s2: string, s3: string): boolean {
    const n1 = s1.length
    const n2 = s2.length
    const n3 = s3.length
    const dp = Array<boolean[]>(n1 + 1)

    for (let i1 = n1; i1 >= 0; i1--) {
        dp[i1] = Array(n1 + 1)
        for (let i2 = n2; i2 >= 0; i2--) {
            dp[i1][i2] = (
                i1 === n1 && i2 === n2 && i1 + i2 === n3 ||
                i1 < n1 && s1[i1] === s3[i1 + i2] && dp[i1 + 1][i2] ||
                i2 < n2 && s2[i2] === s3[i1 + i2] && dp[i1][i2 + 1]
            )
        }
    }

    return dp[0][0]
}
