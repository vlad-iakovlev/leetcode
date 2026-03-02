function minSwaps(grid: number[][]): number {
  const maxRight = grid.map((row) => row.lastIndexOf(1));

  let count = 0;
  for (let i = 0; i < maxRight.length; i++) {
    if (maxRight[i] <= i) continue;

    for (let j = i + 1; j < maxRight.length; j++) {
      if (maxRight[j] <= i) {
        count += j - i;
        maxRight.splice(i, 0, ...maxRight.splice(j, 1));
        break;
      }
    }

    if (maxRight[i] > i) return -1;
  }

  return count;
}
