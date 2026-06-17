function maxSlidingWindow(nums: number[], k: number): number[] {
  const queue = new Int32Array(nums.length);
  const res = new Array<number>(nums.length - k + 1);

  let ql = 0;
  let qr = -1;

  for (let i = 0; i < k; i++) {
    while (qr >= ql && nums[queue[qr]] <= nums[i]) qr--;
    queue[++qr] = i;
  }

  res[0] = nums[queue[0]];

  for (let i = k; i < nums.length; i++) {
    if (queue[ql] === i - k) ql++;
    while (qr >= ql && nums[queue[qr]] <= nums[i]) qr--;
    queue[++qr] = i;
    res[i - k + 1] = nums[queue[ql]];
  }

  return res;
}
