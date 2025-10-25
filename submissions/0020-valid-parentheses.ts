const o = ['(', '{', '[']
const c = [')', '}', ']']

function isValid(s: string): boolean {
    const stack: number[] = []

    for (let i = 0; i < s.length; i++) {
        const oidx = o.indexOf(s[i])
        const cidx = c.indexOf(s[i])

        if (oidx >= 0) stack.push(oidx)
        if (cidx >= 0 && stack.pop() !== cidx) return false
    }

    return stack.length === 0
}
