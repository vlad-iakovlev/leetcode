function isScramble(s1: string, s2: string): boolean {
    const dp = new Map<string, boolean>()

    function scramble(s1: string, s2: string) {
        if (s1 === s2) return true
        const k = `${s1}/${s2}`
        if (dp.has(k)) return dp.get(k)

        const count = Array(26).fill(0)
        for (let i = 0; i < s1.length; i++) {
            count[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++
            count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]--
        }
        if (count.some(Boolean)) {
            dp.set(k, false)
            return false
        }

        for (let i = 1; i < s1.length; i++) {
            const p1 = [s1.slice(0, i), s1.slice(i)]
            let j = p1[1].length

            if (
                scramble(p1[0], s2.slice(0, i)) && scramble(p1[1], s2.slice(i)) ||
                scramble(p1[1], s2.slice(0, j)) && scramble(p1[0], s2.slice(j))
            ) {
                dp.set(k, true)
                return true
            }
        }

        dp.set(k, false)
        return false
    }

    return scramble(s1, s2)
}
