function minimumPairRemoval(nums: number[]): number {
  let res = 0;
  while (!isSorted(nums)) {
    let k = 0;
    for (let i = 1; i < nums.length - 1; i++) {
      if (nums[i] + nums[i + 1] < nums[k] + nums[k + 1]) {
        k = i;
      }
    }

    nums[k] += nums[k + 1];
    nums.splice(k + 1, 1);
    res++;
  }

  return res;
}

function isSorted(nums: number[]): boolean {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) return false;
  }
  return true;
}
