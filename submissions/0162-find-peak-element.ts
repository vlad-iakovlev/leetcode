function findPeakElement(nums: number[]): number {
  let p = 0;
  let q = nums.length - 1;

  while (p < q) {
    let m = Math.trunc((p + q) / 2);
    if (nums[m] < nums[m + 1]) {
      p = m + 1;
    } else {
      q = m;
    }
  }

  return p;
}
