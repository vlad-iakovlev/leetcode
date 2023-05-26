const MAX_INT = Math.pow(2, 31) - 1
const MIN_INT = -Math.pow(2, 31)

function divide(dividend: number, divisor: number): number {
    if (dividend === 0) return 0
    if (dividend === MIN_INT && divisor === -1) return MAX_INT

    let isDividendPositive = dividend === Math.abs(dividend)
    let isDivisorPositive = divisor === Math.abs(divisor)
    let isResultPositive =
        isDividendPositive && isDivisorPositive ||
        !isDividendPositive && !isDivisorPositive

    let result = 0

    while (Math.abs(divisor) <= Math.abs(dividend)) {
        let value = divisor
        let count = 1

        while (Math.abs(value + value) <= Math.abs(dividend)) {
            value += value
            count += count
        }

        if (isResultPositive) {
            dividend -= value
        } else {
            dividend += value
        }

        result += count
    }

    if (!isResultPositive) return -result
    return result
}
