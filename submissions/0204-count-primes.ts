const primes = new Array(5e6).fill(1);
primes[0] = 0;
primes[1] = 0;
for (let i = 2; i < primes.length; i++) {
  if (primes[i]) {
    for (let j = i * 2; j < primes.length; j += i) {
      primes[j] = 0;
    }
  }
}

for (let i = 1; i < primes.length; i++) {
  primes[i] += primes[i - 1];
}

function countPrimes(n: number): number {
  return primes[n - 1] ?? 0;
}
