const max = Math.floor(Math.pow(2, 31) / 10)

function reverse(x: number): number {
    let result = 0

    while (x) {
        const digit = x % 10
        x = x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10)
        if (result > max || result === max && digit > 7) return 0
        if (result < -max || result === -max && digit < -8) return 0
        result = result * 10 + digit
    }

    return result
}
