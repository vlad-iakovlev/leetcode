function isPowerOfTwo(n: number): boolean {
  if (n <= 0) return false;
  while ((n & 1) === 0) n >>= 1;
  return n === 1;
}
