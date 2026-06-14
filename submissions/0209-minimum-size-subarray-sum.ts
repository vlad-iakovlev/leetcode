function minSubArrayLen(target: number, nums: number[]): number {
  let l = 0;
  let r = 0;

  let min = Infinity;
  let sum = 0;
  while (l < nums.length) {
    while (sum < target && r < nums.length) sum += nums[r++];
    if (sum < target) break;

    min = Math.min(min, r - l);
    sum -= nums[l++];
  }

  if (!Number.isFinite(min)) return 0;
  return min;
}
