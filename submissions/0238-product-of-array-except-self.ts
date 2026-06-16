function productExceptSelf(nums: number[]): number[] {
  const res = new Array(nums.length).fill(1);
  let prefix = 1;
  let postfix = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] *= prefix;
    res[nums.length - i - 1] *= postfix;
    prefix *= nums[i];
    postfix *= nums[nums.length - i - 1];
  }
  return res;
}
