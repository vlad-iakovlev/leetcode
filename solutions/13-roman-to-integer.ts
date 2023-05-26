const literals: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}

function romanToInt(s: string): number {
    let num = 0
    
    for (let i = 0; i < s.length; i++) {
        if (literals[s[i]] < literals[s[i + 1]]) {
            num -= literals[s[i]]
        } else {
            num += literals[s[i]]
        }
    }
    
    return num
};
