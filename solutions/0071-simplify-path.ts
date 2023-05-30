function simplifyPath(path: string): string {
    const parts = path.split('/')
    const stack: string[] = []

    for (let i = 0; i < parts.length; i++) {
        if (parts[i] === '..') stack.pop()
        else if (parts[i] && parts[i] !== '.') stack.push(parts[i])
    }

    return '/' + stack.join('/')
}
