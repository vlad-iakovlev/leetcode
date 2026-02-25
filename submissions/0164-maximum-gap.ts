function maximumGap(nums: number[]): number {
  nums = radixSort(nums);

  let maxGap = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    maxGap = Math.max(maxGap, nums[i + 1] - nums[i]);
  }

  return maxGap;
}

function radixSort(nums: number[]): number[] {
  const maxVal = Math.max(...nums);
  const maxExp = Math.log2(maxVal);

  for (let exp = 0; exp <= maxExp; exp += 4) {
    nums = countSort(nums, exp);
  }

  return nums;
}

function countSort(nums: number[], exp: number): number[] {
  const count = new Array<number>(16).fill(0);

  for (let i = 0; i < nums.length; i++) {
    const digit = (nums[i] >> exp) & 15;
    count[digit]++;
  }

  for (let i = 1; i < 16; i++) {
    count[i] += count[i - 1];
  }

  let res = new Array<number>(nums.length);
  for (let i = nums.length - 1; i >= 0; i--) {
    const digit = (nums[i] >> exp) & 15;
    res[count[digit] - 1] = nums[i];
    count[digit]--;
  }

  return res;
}
