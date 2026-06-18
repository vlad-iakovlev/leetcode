function minBitwiseArray(nums: number[]): number[] {
  return nums.map((num) => {
    if (num & 1) return num & ~(((num + 1) & ~num) >> 1);
    return -1;
  });
}
