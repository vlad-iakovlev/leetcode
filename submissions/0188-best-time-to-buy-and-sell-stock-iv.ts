function maxProfit(k: number, prices: number[]): number {
  const buy = Array(k).fill(Infinity);
  const sell = Array(k).fill(0);

  for (let price of prices) {
    for (let i = 0; i < k; i++) {
      buy[i] = Math.min(buy[i], price - (sell[i - 1] ?? 0));
      sell[i] = Math.max(sell[i], price - buy[i]);
    }
  }

  return sell.at(-1);
}
