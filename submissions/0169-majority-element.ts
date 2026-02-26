function majorityElement(nums: number[]): number {
  let m = nums[0];
  let c = 1;

  for (let i = 1; i < nums.length; i++) {
    if (c === 0) {
      m = nums[i];
      c = 1;
    } else if (m === nums[i]) {
      c++;
    } else {
      c--;
    }
  }

  return m;
}
