function sortByBits(arr: number[]): number[] {
  return arr.sort(
    (a, b) => getNumberOfOneBits(a) - getNumberOfOneBits(b) || a - b,
  );
}

function getNumberOfOneBits(num: number) {
  let res = 0;

  while (num) {
    res += num % 2;
    num >>= 1;
  }

  return res;
}
