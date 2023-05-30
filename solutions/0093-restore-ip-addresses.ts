function restoreIpAddresses(s: string): string[] {
    const n = s.length
    const result: string[] = []
    let stack: string[] = []

    function step(l: number) {
        if (l === n && stack.length === 4) {
            result.push(stack.join('.'))
            return
        }

        if (l === n || stack.length === 4) return

        stack.push(s.slice(l, l + 1))
        step(l + 1)
        stack.pop()

        if (s[l] === '0') return
        stack.push(s.slice(l, l + 2))
        step(l + 2)
        stack.pop()

        const sub = s.slice(l, l + 3)
        if (Number(sub) >= 256) return
        stack.push(sub)
        step(l + 3)
        stack.pop()
    }

    step(0)

    return result
}
