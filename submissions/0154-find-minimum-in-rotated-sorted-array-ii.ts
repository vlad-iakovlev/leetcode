function findMin(nums: number[]): number {
  const findMinInternal = (p: number, q: number) => {
    if (p === q || nums[p] < nums[q]) return nums[p];
    if (p + 1 === q) return nums[q];

    const m = Math.trunc((p + q) / 2);
    if (nums[m] === nums[p])
      return Math.min(findMinInternal(p, m), findMinInternal(m, q));
    if (nums[m] > nums[p]) return findMinInternal(m, q);
    return findMinInternal(p, m);
  };

  return findMinInternal(0, nums.length - 1);
}
