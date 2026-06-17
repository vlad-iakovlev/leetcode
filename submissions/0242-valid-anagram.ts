function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const chars = new Int32Array(26);
  for (let i = 0; i < s.length; i++) {
    chars[s.charCodeAt(i) - 97]++;
    chars[t.charCodeAt(i) - 97]--;
  }

  return chars.every((count) => !count);
}
