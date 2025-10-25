const zcc = '0'.charCodeAt(0)
const acc = 'a'.charCodeAt(0)

function isPalindrome(s: string): boolean {
    s = s.toLowerCase()

    let l = 0
    let r = s.length - 1

    while (l < r) {
        let lc = s.charCodeAt(l)
        if (
            !(lc >= zcc && lc < zcc + 10) &&
            !(lc >= acc && lc < acc + 26)
        ) {
            l++
            continue
        }

        let rc = s.charCodeAt(r)
        if (
            !(rc >= zcc && rc < zcc + 10) &&
            !(rc >= acc && rc < acc + 26)
        ) {
            r--
            continue
        }

        if (lc !== rc) return false

        l++
        r--
    }
    
    return true
}
