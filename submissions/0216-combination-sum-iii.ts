function combinationSum3(k: number, n: number): number[][] {
  return combination(k, n, 1);
}

function combination(k: number, n: number, l: number): number[][] {
  if (k === 1) return n >= l && n <= 9 ? [[n]] : [];

  const res: number[][] = [];

  for (let i = l; i <= 10 - k; i++) {
    res.push(...combination(k - 1, n - i, i + 1).map((comb) => [i, ...comb]));
  }

  return res;
}
