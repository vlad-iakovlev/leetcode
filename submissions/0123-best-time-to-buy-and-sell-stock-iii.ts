function maxProfit(prices: number[]): number {
    const n = prices.length
    let b1 = 1e6
    let b2 = 1e6
    let s1 = 0
    let s2 = 0

    for (let i = 0; i < n; i++) {
        if (prices[i]      < b1) b1 = prices[i]
        if (prices[i] - b1 > s1) s1 = prices[i] - b1
        if (prices[i] - s1 < b2) b2 = prices[i] - s1
        if (prices[i] - b2 > s2) s2 = prices[i] - b2
    }

    return s2
}
