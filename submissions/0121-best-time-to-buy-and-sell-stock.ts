function maxProfit(prices: number[]): number {
    const n = prices.length
    let max = 0

    let l = 0
    let r = 1

    while (r < n) {
        const profit = prices[r] - prices[l]

        if (profit >= 0) {
            if (profit > max) max = profit
        } else {
            l = r
        }

        r++
    }

    return max
}
