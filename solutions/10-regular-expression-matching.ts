function isMatch(s: string, p: string, sidx = 0, pidx = 0): boolean {
    for (; pidx < p.length; pidx++) {
        if (p[pidx] === '*') {
            const char = p[pidx - 1]
            while (sidx < s.length && (char === '.' || s[sidx] === char)) {
                if (isMatch(s, p, sidx, pidx + 1)) return true
                sidx++
            }
            continue
        }
        
        if (p[pidx + 1] === '*') continue
        if (sidx >= s.length || (p[pidx] !== '.' && p[pidx] !== s[sidx])) return false
        sidx++
    }

    return sidx === s.length
}
