function largestNumber(nums: number[]): string {
  if (!nums.some(Boolean)) return "0";

  return nums
    .map(String)
    .toSorted((a, b) => `${b}${a}`.localeCompare(`${a}${b}`))
    .join("");
}
