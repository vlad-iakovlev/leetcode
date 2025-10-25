function generateParenthesis(n: number): string[] {
    const result: string[] = []

    function generate(str: string, l: number, r: number) {
        if (r === n) return result.push(str)
        if (l < n) generate(str + '(', l + 1, r)
        if (r < l) generate(str + ')', l, r + 1)
    }

    generate('', 0, 0)

    return result
}
