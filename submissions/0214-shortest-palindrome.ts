function shortestPalindrome(str: string): string {
  const rev = str.split("").reverse().join("");
  const matches = kmp(str, rev);
  return rev.slice(0, str.length - matches) + str;
}

function kmp(str: string, rev: string): number {
  const pat = str + "#" + rev;
  const lps = Array.from({ length: pat.length }, () => 0);

  let i = 1;
  let j = 0;
  while (i < pat.length) {
    if (pat[i] == pat[j]) {
      lps[i++] = ++j;
    } else if (j > 0) {
      j = lps[j - 1];
    } else {
      lps[i++] = 0;
    }
  }

  return lps[pat.length - 1];
}
