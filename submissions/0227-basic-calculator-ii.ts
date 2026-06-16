function calculate(s: string): number {
  let res = 0;
  let curr = 0;
  let last = 0;
  let sign = "+";

  for (let i = 0; i < s.length; i++) {
    const code = s.charCodeAt(i);
    if (code >= 48) {
      curr = curr * 10 + code - 48;
    }

    if (i === s.length - 1 || (code < 48 && code !== 32)) {
      switch (sign) {
        case "+":
          res += last;
          last = curr;
          break;

        case "-":
          res += last;
          last = -curr;
          break;

        case "*":
          last *= curr;
          break;

        case "/":
          last = Math.trunc(last / curr);
          break;
      }

      sign = s[i];
      curr = 0;
    }
  }

  return res + last;
}
