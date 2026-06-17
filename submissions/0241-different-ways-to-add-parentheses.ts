function diffWaysToCompute(exp: string): number[] {
  const cache = new Map<string, number[]>();

  function calc(exp: string): number[] {
    if (cache.has(exp)) return cache.get(exp);

    const res: number[] = [];
    for (let i = 0; i < exp.length; i++) {
      if (exp.charCodeAt(i) >= 48) continue;

      const left = calc(exp.slice(0, i));
      const right = calc(exp.slice(i + 1));

      for (let x of left) {
        for (let y of right) {
          switch (exp[i]) {
            case "+":
              res.push(x + y);
              break;
            case "-":
              res.push(x - y);
              break;
            case "*":
              res.push(x * y);
              break;
          }
        }
      }
    }
    if (!res.length) res.push(Number(exp));
    cache.set(exp, res);

    return res;
  }

  return calc(exp);
}
