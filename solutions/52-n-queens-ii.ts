function totalNQueens(n: number): number {
    const cols = Array<boolean>(n).fill(false)
    const drls = Array<boolean>(n + n - 1).fill(false)
    const dlrs = Array<boolean>(n + n - 1).fill(false)

    let result = 0

    function step(i: number) {
        if (i === n) {
            result++
            return
        }

        for (let j = 0; j < n; j++) {
            const k = i + j
            const l = i - j + n - 1

            if (cols[j] || drls[k] || dlrs[l]) continue

            cols[j] = true
            drls[k] = true
            dlrs[l] = true

            step(i + 1)

            cols[j] = false
            drls[k] = false
            dlrs[l] = false
        }
    }

    step(0)

    return result
}
