function nextGreatestLetter(letters: string[], target: string): string {
    const n = letters.length
    let tc = target.charCodeAt(0)

    if (tc >= letters[n - 1].charCodeAt(0)) return letters[0]
    tc++

    let l = 0
    let r = n - 1

    while (l < r) {
        let m = Math.floor((l + r) / 2)
        let mc = letters[m].charCodeAt(0)
        if (mc === tc) return letters[m]
        if (mc < tc) l = m + 1
        else r = m
    }

    return letters[r]
}
