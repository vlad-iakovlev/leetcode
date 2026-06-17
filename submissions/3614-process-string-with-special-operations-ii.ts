function processStr(s: string, k: number): string {
  let len = 0;

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "*":
        if (len) len--;
        break;

      case "#":
        len *= 2;
        break;

      case "%":
        break;

      default:
        len++;
    }
  }

  if (k >= len) return ".";

  for (let i = s.length - 1; ; i--) {
    switch (s[i]) {
      case "*":
        len++;
        break;

      case "#": {
        const half = Math.trunc(len / 2);
        if (k >= half) k -= half;
        len = half;
        break;
      }

      case "%":
        k = len - 1 - k;
        break;

      default:
        if (k === len - 1) {
          return s[i];
        }
        len--;
    }
  }
}
