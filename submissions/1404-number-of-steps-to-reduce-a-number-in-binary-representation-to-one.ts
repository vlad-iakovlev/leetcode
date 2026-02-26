function numSteps(s: string): number {
  let count = 0;
  let carry = false;

  for (let i = s.length - 1; i > 0; i--) {
    if (s[i] === (carry ? "0" : "1")) {
      count++;
      carry = true;
    }
  }

  return s.length + (count || -1);
}
