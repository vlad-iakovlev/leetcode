function titleToNumber(columnTitle: string): number {
  let res = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    res = res * 26 + columnTitle.charCodeAt(i) - 64;
  }

  return res;
}
