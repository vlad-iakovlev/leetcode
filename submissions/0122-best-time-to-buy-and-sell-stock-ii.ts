function maxProfit(prices: number[]): number {
    const n = prices.length
    let total = 0
    
    for (let i = 0; i < n - 1; i++) {
        const profit = prices[i + 1] - prices[i]
        if (profit >= 0) total += profit
    }

    return total
}
