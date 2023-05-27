function combinationSum2(candidates: number[], target: number): number[][] {
    candidates.sort((a, b) => a - b)
    return getCombs(candidates, target, 0)
}

function getCombs(candidates: number[], target: number, from: number) {
    const result: number[][] = []

    for (let i = from; i < candidates.length; i++) {
        const cand = candidates[i]

        if (cand === target) {
            result.push([cand])
            break
        }

        if (cand > target) {
            break
        }
        
        const combs = getCombs(candidates, target - cand, i + 1)
        result.push(...combs.map(comb => [cand, ...comb]))

        while (candidates[i + 1] === cand) i++
    }

    return result
}
