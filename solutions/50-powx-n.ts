function myPow(x: number, n: number): number {
    let result = 1

    if (n < 0) {
        x = 1 / x
        n = -n
    }

    while (n) {
        if (n % 2 == 0) {
            x *= x
            n /= 2
        } else {
            result *= x
            n--
        }
    }

    return result
}
