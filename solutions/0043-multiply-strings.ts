function multiply(num1: string, num2: string): string {
    num1 = reverse(num1)
    num2 = reverse(num2)
    let result = '0'

    for (let i = 0; i < num1.length; i++) {
        let acc = result.slice(0, i)
        let extra = 0

        for (let j = 0; j < num2.length || i + j < result.length || extra; j++) {
            const value =
                extra +
                getInt(result, i + j) +
                getInt(num1, i) * getInt(num2, j)

            acc += value % 10
            extra = Math.floor(value / 10)
        }

        result = acc
    }

    result = reverse(result)
    let p = 0
    while (result[p] === '0' && p < result.length - 1) p++
    return result.slice(p)
}

function reverse(s: string): string {
    let result = ''
    for (let i = s.length - 1; i >= 0; i--) result += s[i]
    return result
}

function getInt(s: string, i: number): number {
    return (s.charCodeAt(i) || 48) - 48
}
