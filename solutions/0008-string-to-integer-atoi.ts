const MAX_INT = Math.pow(2, 31) - 1
const MIN_INT = -Math.pow(2, 31)

const max = Math.floor(MAX_INT / 10)

function myAtoi(s: string): number {
    let result = 0
    let sign = 1
    let digitFound = false

    for (let i = 0; i < s.length; i++) {
        const charCode = s.charCodeAt(i)

        // Space
        if (charCode === 32 && !digitFound) {
            continue
        }

        // Plus
        if (charCode === 43 && !digitFound) {
            digitFound = true
            continue
        }

        // Minus
        if (charCode === 45 && !digitFound) {
            digitFound = true
            sign = -1
            continue
        }

        // Digit
        if (charCode >= 48 && charCode < 58) {
            digitFound = true
            const digit = (charCode - 48) * sign
            if (result > max || result === max && digit > 7) return MAX_INT
            if (result < -max || result === -max && digit < -8) return MIN_INT
            result = result * 10 + digit
            continue
        }

        break
    }

    return result
}
