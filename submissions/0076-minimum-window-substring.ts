function minWindow(s: string, t: string): string {
    const tmap: Record<string, number> = {}
    for (let i = 0; i < t.length; i++) tmap[t[i]] = (tmap[t[i]] ?? 0) + 1

    let min = [1e6, 0, 1e6]
    let l = 0
    let r = 0
    let used = 0

    while (r < s.length) {
        for (; used < t.length && r < s.length; r++) {
            if (tmap[s[r]] != null) tmap[s[r]]--
            if (tmap[s[r]] >= 0) used++
        }

        while (used === t.length) {
            while (tmap[s[l]] == null) l++
            if (r - l < min[0]) min = [r - l, l, r]
            tmap[s[l]]++
            if (tmap[s[l]] > 0) used--
            l++
        }
    }

    return min[0] === 1e6 ? '' : s.slice(min[1], min[2]) 
}
