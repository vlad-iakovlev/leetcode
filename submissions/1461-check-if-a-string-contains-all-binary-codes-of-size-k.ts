function hasAllCodes(s: string, k: number): boolean {
  const filter = 2 ** k - 1;

  let total = 2 ** k;
  const seen = new Array<boolean>(total);

  let mask = parseInt(s.slice(0, k), 2);
  seen[mask] = true;
  total--;

  for (let i = k; i < s.length; i++) {
    mask = (mask << 1) & filter;
    if (s[i] === "1") mask++;

    if (!seen[mask]) {
      seen[mask] = true;
      total--;
      if (!total) return true;
    }
  }

  return false;
}
