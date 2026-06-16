function countDigitOne(n: number): number {
  let e = 9;
  let f = 1e9;

  let res = 0;
  while (n > 0) {
    let d = Math.trunc(n / f);
    if (d) {
      res += (d * e * f) / 10 + (d > 1 ? f : (n % f) + 1);
    }

    n %= f;
    e--;
    f /= 10;
  }

  return res;
}
