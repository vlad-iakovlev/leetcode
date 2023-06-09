function canCompleteCircuit(gas: number[], cost: number[]): number {
    const n = gas.length
    let tank = 0
    let i = 0

    for (let j = 0; i < n && j < n; j++) {
        let k = (i + j) % n
        tank += gas[k] - cost[k]

        while (tank < 0) {
            tank -= gas[i] - cost[i]
            i++
            j--
        }
    }

    if (i >= n) return -1
    return i
}
