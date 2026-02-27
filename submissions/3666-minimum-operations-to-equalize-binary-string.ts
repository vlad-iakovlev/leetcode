function minOperations(s: string, k: number): number {
  let zero = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "0") zero++;
  }

  if (!zero) return 0;

  if (s.length === k) return zero === s.length ? 1 : -1;

  let res = Infinity;

  if (isOdd(k) === isOdd(zero)) {
    const odd = Math.max(
      Math.ceil(zero / k),
      Math.ceil((s.length - zero) / (s.length - k)),
    );
    res = odd + isEven(odd);
  }

  if (isEven(zero)) {
    const even = Math.max(
      Math.ceil(zero / k),
      Math.ceil(zero / (s.length - k)),
    );
    res = Math.min(res, even + isOdd(even));
  }

  if (Number.isFinite(res)) return res;
  return -1;
}

const isOdd = (num: number) => num & 1;
const isEven = (num: number) => (num & 1) ^ 1;
