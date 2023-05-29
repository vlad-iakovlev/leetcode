function climbStairs(n: number): number {
    let a = 1
    let b = 1

    while (--n) {
        const c = a + b
        a = b
        b = c
    }

    return b
}
