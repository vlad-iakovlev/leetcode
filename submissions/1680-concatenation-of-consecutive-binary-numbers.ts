const mod = BigInt(1e9 + 7);

function concatenatedBinary(n: number): number {
  const bn = BigInt(n);
  let res = 0n;
  let bits = 0n;

  for (let i = 1n; i <= bn; i++) {
    if ((i & (i - 1n)) === 0n) bits++;
    res = ((res << bits) | i) % mod;
  }

  return Number(res);
}
