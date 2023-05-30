function longestCommonPrefix(strs: string[]): string {
    let prefix = strs[0]

    for (let i = 1; i < strs.length; i++) {
        prefix = getCommon(strs[i], prefix)
    }

    return prefix
}

function getCommon(str1: string, str2: string): string {
    if (str1.length < str2.length) return getCommon(str2, str1) 
    if (str1.startsWith(str2)) return str2
    return getCommon(str1, str2.slice(0, -1))
}
