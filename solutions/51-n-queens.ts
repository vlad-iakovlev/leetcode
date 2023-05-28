function solveNQueens(n: number): string[][] {
    const cols = Array<boolean>(n).fill(false)
    const drls = Array<boolean>(n + n - 1).fill(false)
    const dlrs = Array<boolean>(n + n - 1).fill(false)

    const result: string[][] = []
    const stack: string[] = []

    function step(i: number) {
        if (i === n) {
            result.push([...stack])
            return
        }

        for (let j = 0; j < n; j++) {
            const k = i + j
            const l = i - j + n - 1

            if (cols[j] || drls[k] || dlrs[l]) continue

            stack.push('.'.repeat(j) + 'Q' + '.'.repeat(n - j - 1))
            cols[j] = true
            drls[k] = true
            dlrs[l] = true

            step(i + 1)

            stack.pop()
            cols[j] = false
            drls[k] = false
            dlrs[l] = false
        }
    }

    step(0)

    return result
}
