function singleNumber(nums: number[]): number[] {
  let diff = nums.reduce((acc, num) => acc ^ num);
  diff &= -diff;

  let res1 = 0;
  let res2 = 0;
  for (let num of nums) {
    if (num & diff) res1 ^= num;
    else res2 ^= num;
  }

  return [res1, res2];
}
