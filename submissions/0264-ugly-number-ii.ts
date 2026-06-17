function nthUglyNumber(n: number): number {
  const ugly = new Array<number>(n).fill(1);
  let i2 = 0;
  let i3 = 0;
  let i5 = 0;

  for (let i = 1; i < n; i++) {
    const next = Math.min(ugly[i2] * 2, ugly[i3] * 3, ugly[i5] * 5);
    ugly[i] = next;

    if (next === ugly[i2] * 2) i2++;
    if (next === ugly[i3] * 3) i3++;
    if (next === ugly[i5] * 5) i5++;
  }

  return ugly.at(-1);
}
