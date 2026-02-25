function findMin(nums: number[]): number {
  let p = 0;
  let q = nums.length - 1;

  while (p < q) {
    if (nums[p] < nums[q]) return nums[p];
    if (p + 1 === q) return nums[q];

    const m = Math.trunc((p + q) / 2);
    if (nums[m] > nums[p]) {
      p = m;
    } else {
      q = m;
    }
  }

  return nums[p];
}
