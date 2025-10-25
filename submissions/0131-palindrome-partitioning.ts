function partition(s: string): string[][] {
    const n = s.length
    const result: string[][] = []
    let stack: string[] = []

    function bt(i: number) {
        if (i === n) {
            result.push([...stack])
            return
        }

        for (let j = i + 1; j <= n; j++) {
            let l = i
            let r = j - 1

            while (l < r) {
                if (s[l] !== s[r]) break
                l++
                r--
            }

            if (l < r) continue

            stack.push(s.slice(i, j))
            bt(j)
            stack.pop()
        }
    }

    bt(0)

    return result
}
