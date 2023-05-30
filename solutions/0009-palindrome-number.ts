function isPalindrome(x: number): boolean {
    if (x === 0) return true
    if (x < 0 || x % 10 === 0) return false

    let reverted = 0

    while (x) {
        reverted = reverted * 10 + x % 10
        if (x === reverted) return true

        x = Math.floor(x / 10)
        if (x === reverted) return true
        if (x < reverted) return false
    }

    return false
}
