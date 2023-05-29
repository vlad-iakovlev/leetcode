function fullJustify(words: string[], maxWidth: number): string[] {
    let result: string[] = []

    let stack = [words[0]]
    let width = words[0].length

    for (let i = 1; i < words.length; i++) {
        if (words[i].length < maxWidth - width) {
            stack.push(words[i])
            width += words[i].length + 1
            continue
        }
        
        if (stack.length === 1) {
            result.push(stack[0].padEnd(maxWidth))
        } else {
            let sp = maxWidth - width

            while (sp) {
                for (let i = 0; sp && i < stack.length - 1; i++) {
                    stack[i] += ' '
                    sp--
                }
            }

            result.push(stack.join(' '))
        }

        stack = [words[i]]
        width = words[i].length

    }

    result.push(stack.join(' ').padEnd(maxWidth))

    return result
}
