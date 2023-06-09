function candy(ratings: number[]): number {
    const n = ratings.length
    const candies = Array<number>(n)

    for (let i = 0; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) candies[i] = candies[i - 1] + 1
        else candies[i] = 1
    }

    let result = 0
    for (let i = n - 1; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) candies[i] = Math.max(candies[i], candies[i + 1] + 1)
        result += candies[i]
    }

    return result
}
