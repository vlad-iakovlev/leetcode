function rangeBitwiseAnd(left: number, right: number): number {
  while (right > left) right &= right - 1;
  return left & right;
}
