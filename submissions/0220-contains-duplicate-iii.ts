function containsNearbyAlmostDuplicate(
  nums: number[],
  k: number,
  t: number,
): boolean {
  if (t === 0) return containsNearbyDuplicate(nums, k);

  const buckets = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const bucket = Math.floor(nums[i] / (t + 1));
    if (buckets.has(bucket)) return true;
    buckets.set(bucket, nums[i]);

    if (buckets.has(bucket - 1) && nums[i] - buckets.get(bucket - 1) <= t)
      return true;
    if (buckets.has(bucket + 1) && buckets.get(bucket + 1) - nums[i] <= t)
      return true;

    if (buckets.size > k) buckets.delete(Math.floor(nums[i - k] / (t + 1)));
  }

  return false;
}

function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const set = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true;
    set.add(nums[i]);
    if (i >= k) set.delete(nums[i - k]);
  }

  return false;
}
