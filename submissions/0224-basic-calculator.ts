function calculate(s: string): number {
  const stack = [];
  let num = 0;
  let sign = 1;
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    const code = s.charCodeAt(i);
    if (code >= 48) {
      num = num * 10 + code - 48;
      continue;
    }

    switch (s[i]) {
      case "+":
        res += sign * num;
        num = 0;
        sign = 1;
        break;

      case "-":
        res += sign * num;
        num = 0;
        sign = -1;
        break;

      case "(":
        stack.push(res, sign);
        res = 0;
        sign = 1;
        break;

      case ")":
        res += sign * num;
        num = 0;
        res *= stack.pop();
        res += stack.pop();
        break;
    }
  }

  return res + sign * num;
}
