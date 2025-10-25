function isMatch(s: string, p: string): boolean {
    let si = 0
    let pi = 0
    let starIdx = -1
    let stempIdx = -1

    while (si < s.length) {
        if (p[pi] === '?' || s[si] === p[pi]) {
            si++
            pi++
            continue
        }
        
        if (p[pi] === '*') {
            starIdx = pi
            stempIdx = si
            pi++
            continue
        }
        
        if (starIdx === -1) return false
        pi = starIdx + 1
        si = ++stempIdx
        
    }

    for (let i = pi; i < p.length; i++) if (p[i] !== '*') return false
    return true
}
