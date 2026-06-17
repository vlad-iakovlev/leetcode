function processStr(s: string): string {
  let r = "";
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "*":
        if (r.length) r = r.slice(0, -1);
        break;

      case "#":
        r += r;
        break;

      case "%":
        r = r.split("").reverse().join("");
        break;

      default:
        r += s[i];
    }
  }

  return r;
}
