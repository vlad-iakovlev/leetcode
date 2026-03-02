function isHappy(n: number): boolean {
  const seen = new Set<number>();

  while (n !== 1 && !seen.has(n)) {
    seen.add(n);

    let next = 0;
    while (n) {
      const digit = n % 10;
      n = Math.trunc(n / 10);
      next += digit * digit;
    }

    n = next;
  }

  return n === 1;
}
