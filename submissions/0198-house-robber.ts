function rob(nums: number[]): number {
  const cache = Array.from({ length: nums.length }, () => -1);

  function calc(i: number): number {
    if (i >= nums.length) return 0;
    if (cache[i] >= 0) return cache[i];
    return (cache[i] = Math.max(nums[i] + calc(i + 2), calc(i + 1)));
  }

  return calc(0);
}
