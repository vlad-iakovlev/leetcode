function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>()
    
    strs.forEach(str => {
        const key = str.split('').sort().join('')
        if (!map.get(key)) map.set(key, [str])
        else map.get(key).push(str)
    })
    
    return [...map.values()]
}
