function reverse(x: number): number {
    if (x > 0) return reversePositive(x)
    if (x < 0) return reverseNegative(x)
    return x
}

function reversePositive(x: number): number {
    let result = 0

    while (x) {
        const digit = x % 10
        x = Math.floor(x / 10)
        if (result > max || result === max && digit > 7) return 0
        result = result * 10 + digit
    }

    return result
}

function reverseNegative(x: number): number {
    x = -x
    let result = 0

    while (x) {
        const digit = x % 10
        x = Math.floor(x / 10)
        if (result > max || result === max && digit > 8) return 0
        result = result * 10 + digit
    }

    return -result
}
