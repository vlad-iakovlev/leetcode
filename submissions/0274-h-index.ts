function hIndex(citations: number[]): number {
  const map = new Int32Array(1001);
  let max = 0;
  for (let c of citations) {
    max = Math.max(max, c);
    map[c]++;
  }

  let acc = 0;
  for (let h = max; h > 0; h--) {
    acc += map[h];
    if (acc >= h) return h;
  }

  return 0;
}
