function hIndex(citations: number[]): number {
  const n = citations.length;
  let l = 0;
  let r = n;

  while (l < r) {
    const m = Math.floor((l + r) / 2);
    if (citations[m] >= n - m) r = m;
    else l = m + 1;
  }

  return n - r;
}
