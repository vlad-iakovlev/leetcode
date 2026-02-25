function maxProduct(nums: number[]): number {
  let max = -Infinity;
  let prod = 1;

  for (let i = 0; i < nums.length; i++) {
    prod *= nums[i];
    max = Math.max(max, prod);
    prod ||= 1;
  }

  prod = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    prod *= nums[i];
    max = Math.max(max, prod);
    prod ||= 1;
  }

  return max;
}
