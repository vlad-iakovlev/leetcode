function findRepeatedDnaSequences(s: string): string[] {
  const seen = new Set<string>();
  const repeating = new Set<string>();

  for (let i = 0; i <= s.length - 10; i++) {
    const seq = s.slice(i, i + 10);
    if (seen.has(seq)) {
      repeating.add(seq);
    } else {
      seen.add(seq);
    }
  }

  return Array.from(repeating);
}
