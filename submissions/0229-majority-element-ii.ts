function majorityElement(nums: number[]): number[] {
  let m1 = 0;
  let c1 = 0;
  let m2 = 1;
  let c2 = 0;

  for (let num of nums) {
    if (c1 === 0 && num !== m2) {
      m1 = num;
      c1 = 1;
    } else if (c2 === 0 && num !== m1) {
      m2 = num;
      c2 = 1;
    } else if (m1 === num) {
      c1++;
    } else if (m2 === num) {
      c2++;
    } else {
      c1--;
      c2--;
    }
  }

  c1 = 0;
  c2 = 0;
  for (let num of nums) {
    if (m1 === num) c1++;
    if (m2 === num) c2++;
  }

  const res: number[] = [];
  if (c1 > Math.floor(nums.length / 3)) res.push(m1);
  if (c2 > Math.floor(nums.length / 3)) res.push(m2);
  return res;
}
