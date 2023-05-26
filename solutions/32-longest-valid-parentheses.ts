function longestValidParentheses(s: string): number {
    let stack: number[] = []
    let max = 0
    let l = -1

    for (let r = 0; r < s.length; r++) {
        if (s[r] == '(') {
            stack.push(r)
            continue
        }

        if (!stack.length) {
            l = r
            continue
        }
        
        stack.pop()

        if (!stack.length) {
            if (r - l > max) max = r - l
            continue
        }

        const ll = stack[stack.length - 1]
        if (r - ll > max) max = r - ll
    }

    return max
}
