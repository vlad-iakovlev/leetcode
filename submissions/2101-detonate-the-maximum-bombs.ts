function maximumDetonation(bombs: number[][]): number {
    const n = bombs.length

    const graph = Array<boolean[]>(n)
    for (let i = 0; i < n; i++) {
        graph[i] = Array(n)
        for (let j = 0; j < n; j++) {
            const x = bombs[i][0] - bombs[j][0]
            const y = bombs[i][1] - bombs[j][1]
            graph[i][j] = Math.sqrt(x * x + y * y) - bombs[i][2] < 1e-5
        }
    }

    let max = 0

    for (let i = 0; i < n; i++) {
        const detonated = Array<boolean>(n).fill(false)
        const deq: number[] = [i]
        let count = 0

        while (deq.length) {
            const j = deq.pop()
            if (detonated[j]) continue
            detonated[j] = true
            count++
            graph[j].forEach((reachable, k) => {
                if (reachable) deq.push(k)
            })
        }

        if (count > max) max = count
    }

    return max
}
