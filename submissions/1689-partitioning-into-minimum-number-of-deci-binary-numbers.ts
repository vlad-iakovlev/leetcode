function minPartitions(n: string): number {
  let max = 0;

  for (let i = 0; i < n.length; i++) {
    const d = +n[i];
    if (d === 9) return 9;
    if (d > max) max = d;
  }

  return max;
}
