function countPrimeSetBits(left: number, right: number): number {
  let count = 0;

  for (let i = left; i <= right; i++) {
    if (isPrime(countSetBits(i))) {
      count++;
    }
  }

  return count;
}

function countSetBits(num: number) {
  let count = 0;

  while (num) {
    count += num & 1;
    num >>= 1;
  }

  return count;
}

// It's ugly, but it's faster
function isPrime(num: number) {
  return (
    num === 2 ||
    num === 3 ||
    num === 5 ||
    num === 7 ||
    num === 11 ||
    num === 13 ||
    num === 17 ||
    num === 19
  );
}
