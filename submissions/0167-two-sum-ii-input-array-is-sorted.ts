function twoSum(numbers: number[], target: number): number[] {
  let p = 0;
  let q = numbers.length - 1;

  while (p < q) {
    const value = numbers[p] + numbers[q];
    if (value === target) return [p + 1, q + 1];
    if (value < target) p++;
    else q--;
  }
}
