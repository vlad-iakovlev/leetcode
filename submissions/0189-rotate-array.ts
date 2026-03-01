function rotate(nums: number[], k: number): void {
  k = k % nums.length;
  if (k === 0) return;
  nums.splice(0, 0, ...nums.splice(nums.length - k, k));
}
