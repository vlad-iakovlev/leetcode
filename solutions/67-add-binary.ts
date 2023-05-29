function addBinary(a: string, b: string): string {
    let extra = 0
    let result = ''

    for (let i = 1; i <= a.length || i <= b.length || extra; i++) {
        const aa = Number(a[a.length - i] === '1')
        const bb = Number(b[b.length - i] === '1')
        const val = extra + aa + bb

        result = (val & 0b1) + result
        extra = val >> 1
    }

    return result
}
