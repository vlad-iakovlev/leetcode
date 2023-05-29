function isNumber(s: string): boolean {
    let hasDot = false
    let hasSign = false
    let hasExp = false
    let hasDigit = false

    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case '+':
            case '-': {
                if (hasDot || hasSign || hasDigit) return false
                hasSign = true
                break
            }

            case '.': {
                if (hasDot || hasExp) return false
                hasDot = true
                break
            }

            case 'e':
            case 'E': {
                if (hasExp || !hasDigit) return false
                hasExp = true
                hasDot = false
                hasSign = false
                hasDigit = false
                break
            }

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9': {
                hasDigit = true
                break
            }

            default: return false
        }
    }

    return hasDigit
}
