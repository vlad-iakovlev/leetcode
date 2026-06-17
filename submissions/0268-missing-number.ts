function missingNumber(nums: number[]): number {
  const sum = (nums.length * (nums.length + 1)) / 2;
  return sum - nums.reduce((acc, num) => acc + num);
}
