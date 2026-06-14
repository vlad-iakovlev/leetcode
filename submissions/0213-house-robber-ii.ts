function rob(nums: number[]): number {
  function calc(cache: number[], i: number, n: number): number {
    if (i > n) return 0;
    if (cache[i] < 0) {
      cache[i] = Math.max(
        nums[i] + calc(cache, i + 2, n),
        calc(cache, i + 1, n),
      );
    }
    return cache[i];
  }

  return Math.max(
    nums[0],
    calc(
      Array.from({ length: nums.length }, () => -1),
      0,
      nums.length - 2,
    ),
    calc(
      Array.from({ length: nums.length }, () => -1),
      1,
      nums.length - 1,
    ),
  );
}
