function isIsomorphic(s: string, t: string): boolean {
  const mapS = {};
  const mapT = {};
  let char = 0;

  for (let i = 0; i < s.length; i++) {
    if (mapS[s[i]] !== mapT[t[i]]) return false;

    if (!mapS[s[i]]) {
      mapS[s[i]] = String.fromCharCode(char);
      mapT[t[i]] = String.fromCharCode(char);
      char++;
    }
  }

  return true;
}
