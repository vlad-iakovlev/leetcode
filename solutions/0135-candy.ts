function candy(ratings: number[]): number {
    const n = ratings.length
    const candies = Array<number>(n)

    candies[0] = 1
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) candies[i] = candies[i - 1] + 1
        else candies[i] = 1
    }

    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1]) candies[i] = candies[i + 1] + 1
    }

    console.log(candies)

    return candies.reduce((acc, count) => acc + count, 0)
}
