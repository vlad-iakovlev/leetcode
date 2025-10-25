function combinationSum(candidates: number[], target: number, from = 0): number[][] {
    const result: number[][] = []

    for (let i = from; i < candidates.length; i++) {
        const cand = candidates[i]

        if (cand === target) {
            result.push([cand])
        } else if (cand < target) {
            const sub = combinationSum(candidates, target - cand, i)
            result.push(...sub.map(comb => [cand, ...comb]))
        }
    }

    return result
}
