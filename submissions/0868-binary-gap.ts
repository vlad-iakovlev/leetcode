function binaryGap(n: number): number {
  while (n && n % 2 === 0) n >>= 1;

  let max = 0;
  let count = 0;
  while (n) {
    if (n & 1) {
      max = Math.max(max, count);
      count = 1;
    } else {
      count++;
    }

    n >>= 1;
  }

  return max;
}
